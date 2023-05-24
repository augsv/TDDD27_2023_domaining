import Card from "@/components/cards/card"
import Section from "@/components/layout/section"

export default function Domains() {
    const domains = ["test.ett", "test.två", "test.tre"]
    const cards = domains.map((domain, index) => {
        <Card key={index} props={domain}/>
    })

    return (
        <>
            <Section />
            {cards}
        </>
    )
}