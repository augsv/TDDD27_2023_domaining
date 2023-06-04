import Section from "@/components/layout/section";
import LargeTitle from "@/components/titles/large";
import SmallTitle from "@/components/titles/small";

export default function HowItWorks() {
    const step1 = "För att kunna köpa eller sälja domännamn behöver du först skapa ett konto. Genom att klicka på \"logga in\" kan du snabbt och enkelt skapa ett konto. Du kommer att behöva tillhandahålla några grundläggande uppgifter såsom namn, e-postadress och ett lösenord. Du kan även logga in genom ditt Google- eller Microsoft-konto."
    const step2 = "Om du vill köpa ett domännamn, navigera till vår söksida. Här kan du söka på specifika domännamn eller bläddra genom vår shop. När du har hittat ett domännamn du är intresserad av, klicka på domänen och sedan \"köp nu\"-knappen. Du kommer att omdirigeras till en betalningssida där du kan granska ditt köp och slutföra betalningen. När betalningen har genomförts kommer du att motta en bekräftelse via e-post."
    const step3 = "När en transaktion har slutförts är det dags för överföring av domännamnet. Den exakta processen kan variera beroende på vilken domänregistrator du använder. Vanligtvis kommer du att få en överföringskod (även kallad EPP-kod eller AUTH-kod), vårt system kommer att agera som tredje part så att överföringen går till på ett säkert och smidigt sätt. Viktigt att notera är att överföringsprocessen kan ta upp till några dagar beroende på domänregistrator."
    const step4 = "När överföringen är klar kommer både köparen och säljaren att få ett meddelande om att transaktionen har slutförts framgångsrikt. Säljaren får sedan betalningen för domännamnet. Om du har några frågor eller bekymmer under något steg av processen, tveka inte att kontakta vår kundtjänst. Vi är här för att hjälpa till!"

    return (
        <>
            <Section height="half">
                <div className="mx-auto max-w-2xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <LargeTitle text="Så funkar det" />
                    <SmallTitle text="Steg 1: Skapa ett konto" />
                    <p className="mb-8 text-black">{ step1 }</p>
                    <SmallTitle text="Steg 2: Köpa ett domännamn" />
                    <p className="mb-8 text-black">{ step2 }</p>
                    <SmallTitle text="Steg 3: Överföring av domännamnet" />
                    <p className="mb-8 text-black">{ step3 }</p>
                    <SmallTitle text="Steg 4: Bekräfta överföringen" />
                    <p className="mb-8 text-black">{ step4 }</p>
                </div>
            </Section>
        </>
    )
}
