import SmallHero from "@/components/heros/small"
import DomainList from "@/components/lists/domain";
import { Domain, DomainArray } from "@/types/domain";


export default function Domains({ domains }: DomainArray) {
    const domainsArray = [{"id":1,"name":"test.se","price":40,"currency":"USD","createdAt":"2023-04-10T12:22:34.774Z","updatedAt":"2023-04-10T12:22:34.774Z"},{"id":2,"name":"nlu.se","price":5000,"currency":"SEK","createdAt":"2023-04-10T12:22:50.149Z","updatedAt":"2023-04-10T12:22:50.149Z"},{"id":3,"name":"exempel.se","price":7400,"currency":"SEK","createdAt":"2023-04-10T12:23:05.879Z","updatedAt":"2023-04-10T12:23:05.879Z"},{"id":4,"name":"foobar.se","price":100000,"currency":"SEK","createdAt":"2023-04-10T12:23:24.716Z","updatedAt":"2023-04-10T12:23:24.716Z"},{"id":8,"name":"nlu.se","price":1005,"currency":"SEK","createdAt":"2023-04-26T07:56:14.556Z","updatedAt":"2023-04-26T07:56:46.025Z"},{"id":9,"name":"exempel.se","price":20,"currency":"SEK","createdAt":"2023-04-26T07:56:14.556Z","updatedAt":"2023-04-26T07:56:14.556Z"},{"id":10,"name":"abc.se","price":2500,"currency":"SEK","createdAt":"2023-04-26T07:56:14.556Z","updatedAt":"2023-04-26T07:56:14.556Z"},{"id":11,"name":"test.se","price":200,"currency":"SEK","createdAt":"2023-04-26T08:39:13.076Z","updatedAt":"2023-04-26T08:39:13.076Z"}]
    const header = "Domäner.";
    const description = "Sök efter domäner nedan."

    return (
        <>
            <SmallHero header={header} description={description} />
            <DomainList domains={domainsArray} />
        </>
    )
}

/* export async function getServerSideProps() {
    const data = await fetch('http://api.nlu.se/listings');
    const domains: Domain[] = await data.json();

    return { props: { domains, } }
} */