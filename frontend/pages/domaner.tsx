import Card from "@/components/cards/card"
import SmallHero from "@/components/heros/small"
import Section from "@/components/layout/section"
import DomainList from "@/components/lists/domain";

export type Domain = {
    id: number;
    name: string;
    price: number;
    currency: string;
    createdAt: string;
    updatedAt: string;
}

export type MyPageProps = {
    domains: Domain[];
}

export default function Domains({ domains }: MyPageProps) {
    const header = "Domäner.";
    const description = "Sök efter domäner nedan."

    return (
        <>
            <SmallHero header={header} description={description} />
            <DomainList domains={domains} />
        </>
    )
}

export async function getServerSideProps() {
    const data = await fetch('http://api.nlu.se/listings');
    const domains: Domain[] = await data.json();

    return { props: { domains, } }
}