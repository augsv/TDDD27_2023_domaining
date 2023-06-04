import { Domain } from '@/types/domain';
import { useRouter } from 'next/router';
import { Appearance, Stripe, StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { UserProfile, useUser } from '@auth0/nextjs-auth0/client';

import Image from "next/image";
import React from 'react';
import CheckoutForm from '@/components/stripe/checkoutform';
import Section from '@/components/layout/section';
import { assert } from 'console';

let stripePromise: Promise<Stripe | null>;

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY !== undefined) {
  stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);
} else {
  throw new Error('public stripe key is undefined.');
}

type PageProps = {
  domains: Domain[];
}

export default function Page({ domains }: PageProps) {
  const width = 500;
  const height = 500;

  let domain: Domain = {"id":1,"name":"test.se","price":40,"currency":"USD","createdAt":"2023-04-10T12:22:34.774Z","updatedAt":"2023-04-10T12:22:34.774Z"}; // TODO: Remove

  const router = useRouter();

  domains.forEach((val) => {
    if (val.name.split(".")[0] == router.query.slug) {
      domain = val;
      return;
    }
  })

  const { user, error, isLoading } = useUser();

  const [clientSecret, setClientSecret] = React.useState<string>("");
  const [showCheckout, setShowCheckout] = React.useState<boolean>(false);

  const handleCheckoutButtonClick = () => {
    if (user) {
      fetch("/api/stripe/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          items: domain,
          customer: user.sub,
        })
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
          setShowCheckout(true);
        });
    }
  };

  const appearance: Appearance = {
    theme: 'flat',
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };
  
  return (
    <Section height="half">
      <div className="flex md:flex-row flex-col mx-auto max-w-7xl">
        <div className="p-4 md:p-8 basis-1/2">
          <div className="aspect-h-1 aspect-w-1 w-50vw overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <Image className="h-full w-full object-cover object-center group-hover:opacity-75" width={width} height={height} src="/image-1.jpg" alt="" />
          </div>
        </div>
        <div className="px-4 py-2 md:p-8 basis-1/2">
          <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">{ domain.name }</h1>
              <h1 className="text-center mb-5 sm:mb-10 text-1xl tracking-tight text-gray-900 sm:text-3xl">{ domain.price + " " + domain.currency }</h1>
              {
                !showCheckout && user && (
                  <button type="button" onClick={handleCheckoutButtonClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-52 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Köp</button>
                )
              }
              {
                !showCheckout && !user && (
                  <button type="button" className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 w-52" disabled>Logga in för att köpa</button>
                )
              }
              {
                showCheckout && (
                  <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )
              }
          </div>
        </div>
      </div>
    </Section>
  )
}

export async function getServerSideProps() { // TODO: Fetch only one domain by name
  const data = await fetch('http://localhost:8000/listings');
  const domains: Domain[] = await data.json();

  return { props: { domains } }
}