import Card from "@/components/cards/card"
import Section from "@/components/layout/section"

export default function Domains() {
    const domains = [{"id":8,"name":"nlu.se","price":1005,"currency":"SEK","createdAt":"2023-04-26T07:56:14.556Z","updatedAt":"2023-04-26T07:56:46.025Z"},{"id":9,"name":"exempel.se","price":20,"currency":"SEK","createdAt":"2023-04-26T07:56:14.556Z","updatedAt":"2023-04-26T07:56:14.556Z"},{"id":10,"name":"abc.se","price":2500,"currency":"SEK","createdAt":"2023-04-26T07:56:14.556Z","updatedAt":"2023-04-26T07:56:14.556Z"},{"id":11,"name":"test.se","price":200,"currency":"SEK","createdAt":"2023-04-26T08:39:13.076Z","updatedAt":"2023-04-26T08:39:13.076Z"}]

    return (
        <>
        <Section height={"half"}>

        </Section>
            <Section height={"full"}>
                {domains.map((domain, index) => (
                    <Card key={index} props={domain.name}/>
                ))}
            </Section>
        </>
    )
}