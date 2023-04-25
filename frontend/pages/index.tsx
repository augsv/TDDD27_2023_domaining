import { Inter } from 'next/font/google'
import Hero from '@/components/index/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero/>
    </>
  )
}
