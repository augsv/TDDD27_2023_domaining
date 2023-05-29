import { Domain } from '@/types/domain';
import { useRouter } from 'next/router';
import { Appearance, Stripe, StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Image from "next/image";
import React from 'react';
import CheckoutForm from '@/components/stripe/checkoutform';

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

  let domain: Domain;

  const router = useRouter();

  domains.forEach((val) => {
    if (val.name.split(".")[0] == router.query.slug) {
      domain = val;
      return;
    }
  })

  const [clientSecret, setClientSecret] = React.useState<string>("");
  const [showCheckout, setShowCheckout] = React.useState<boolean>(false);

  const handleCheckoutButtonClick = () => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/stripe/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setShowCheckout(true);
      });
  };

  const appearance: Appearance = {
    theme: 'flat',
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };
  
  return (
    <div className="flex md:flex-row flex-col mx-auto max-w-7xl">
      <div className="p-4 md:p-8 basis-1/2">
        <div className="aspect-h-1 aspect-w-1 w-50vw overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <Image className="h-full w-full object-cover object-center group-hover:opacity-75" width={width} height={height} src="/image-1.jpg" alt="" />
        </div>
      </div>
      <div className="px-4 py-2 md:p-8 basis-1/2">
        <div className="flex flex-col justify-center items-center h-full">
            { /* eslint-disable */ }
            <h1 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">{ domain.name }</h1>
            <h1 className="text-center mb-5 sm:mb-10 text-1xl tracking-tight text-gray-900 sm:text-3xl">{ domain.price + " " + domain.currency }</h1>
            { /* eslint-enable */ }
            {
              !showCheckout && (
                <button type="button" onClick={handleCheckoutButtonClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-52 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Köp</button>
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
  )
}

export async function getServerSideProps() { // TODO: Fetch only one domain by name
  const data = await fetch('http://api.nlu.se/listings');
  const domains: Domain[] = await data.json();

  return { props: { domains } }
}