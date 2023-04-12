import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import Hero from '@/components/index/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero/>
    </>
  )
}
