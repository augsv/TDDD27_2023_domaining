import Image from "next/image";
import { Domain } from '@/types/domain';
import { useRouter } from 'next/router';

type PageProps = {
  domains: Domain[];
}

export default function Page({ domains }: PageProps) {
  const width = 500;
  const height = 500;

  let domain: Domain;

  // Bild, domän, pris, beskrivning, köp-knapp
  const router = useRouter();

  domains.forEach((val) => {
    if (val.name.split(".")[0] == router.query.slug) {
      domain = val;
      return;
    }
  })

  //return <p>Post: {router.query.slug}</p>;
  
  return (
    <div className="flex flex-row mx-auto max-w-7xl">
        <div className="aspect-h-1 aspect-w-1 w-50vw overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <Image className="h-full w-full object-cover object-center group-hover:opacity-75" width={width} height={height} src="/image-1.jpg" alt="" />
        </div>
      <div>
        <h1>{ domain.name }</h1>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await fetch('http://api.nlu.se/listings');
  const domains: Domain[] = await data.json();

  return { props: { domains } }
}