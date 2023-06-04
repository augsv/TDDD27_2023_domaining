import { Inter } from 'next/font/google'
import LargeHero from '@/components/heros/large'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let header = "Hitta ditt nästa varumärke.";
  let description = "Svårt att komma på ett namn till ditt företag? Vi har över 2000 domännamn till salu för att du ska kunna hitta det bästa namnet för just din startup.";
  let button1 = "Utforska";
  let button2 = "Läs mer";

  return (
    <>
      <LargeHero header={header} description={description} button1={button1} button2={button2} />
    </>
  )
}
