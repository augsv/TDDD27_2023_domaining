import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Section from '@/components/layout/section';
import SmallTitle from '@/components/titles/small';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { GetServerSidePropsResult } from 'next';
import BoughtDomainList from '@/components/lists/boughtdomains';

interface Charge {
  amount: number;
  currency: string;
  created: any;
  domain: string;
}

interface ProfileProps {
  charges: Charge[];
}

export default function Profile({ charges }: ProfileProps) {
  let width = 100;
  let height = 100;
  let profilePic = true;

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user?.picture) {
    profilePic = false;
  }

  return (
    user && (
      <Section height="half">
        <div className="mx-auto max-w-2xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {profilePic && (
            <div className="flex justify-center mb-10">
              <Image src={user.picture as string} alt={user.name as string} width={width} height={height} />
            </div>
          )}
          <div className="text-center">
            <SmallTitle text={user.name as string} />
          </div>
          <p>{user.email}</p>
          <SmallTitle text="Mina köp" />
          {Array.isArray(charges) && charges.length > 0 ? (
            <BoughtDomainList chargeList={charges} />
          ) : (
            <p>Inga betalningar hittades</p>
          )}
        </div>
      </Section>
    )
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx): Promise<GetServerSidePropsResult<ProfileProps>> {
    const user = await getSession(ctx.req, ctx.res);

    if (!user || !user.user) {
      // Handle unauthorized access here
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    const protocol = ctx.req.headers['x-forwarded-proto'];
    const host = ctx.req.headers['host'];

    if (user) {
      const data = await fetch(`${protocol}://${host}/api/stripe/get-purchases`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: user.sub,
        }),
      });

      const responseData = await data.json();

      const charges: Charge[] = Array.isArray(responseData) ? responseData : []; // TODO: There is probably a better way to validate

      return { props: { charges } };
    }

    return {
      props: {
        charges: [],
      },
    };
  },
});
