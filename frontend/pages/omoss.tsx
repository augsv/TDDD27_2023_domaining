import Section from "@/components/layout/section";
import LargeTitle from "@/components/titles/large";

export default function About() {
    // TODO: Fix this later with CMS
    const firstParagraph = "Tanken med denna sida är att skapa en plats där människor enkelt kan köpa och sälja domännamn på andra hand. Vi har märkt att det finns ett behov av en centraliserad plats där användare tryggt kan utföra dessa transaktioner, och därför ligger vårt fokus på att förenkla denna process och göra den så säker och effektiv som möjligt."
    const secondParagraph = "Hos oss kan både köpare och säljare mötas, oavsett om du är en företagare som letar efter det perfekta domännamnet för ditt nästa projekt, eller om du är en domänägare som vill sälja dina domännamn. Vi arbetar ständigt för att förbättra vår plattform, baserat på användarnas feedback och behov."
    const thirdParagraph = "Vi tror att teknik är ett kraftfullt verktyg som kan föra människor samman och skapa nya möjligheter. Det är denna övertygelse som ligger till grund för allt vi gör här."
    const fourthParagraph = "Vi hoppas att du finner vår tjänst användbar och vi ser fram emot att hjälpa dig att uppnå dina mål inom domännamnshandel. Om du har några frågor, feedback eller bara vill säga hej, tveka inte att kontakta oss."
    const fifthParagraph = "Tack för att du besöker vår webbplats!"
    const sixthParagraph = "August Svensson"
    const seventhParagraph = "Grundare och webbutvecklare"

    return (
        <Section height="half">
            <div className="mx-auto max-w-2xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <LargeTitle text="Om oss" />
                <p className="mb-4"> {firstParagraph} </p>
                <p className="mb-4"> {secondParagraph} </p>
                <p className="mb-4"> {thirdParagraph} </p>
                <p className="mb-4"> {fourthParagraph} </p>
                <p className="mb-8"> {fifthParagraph} </p>
                <p> {sixthParagraph} </p>
                <p> {seventhParagraph} </p>
            </div>
        </Section>
    )
}