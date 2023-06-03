import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/HomePageComponents/Navbar'
import HomeComnponent from '@/components/HomePageComponents/Home'
import TrendingCoins from '@/components/CoinDetailPageComponents/TrendingCoins'
import React from "react"
import Hero from '@/components/HomePageComponents/Hero'


const inter = Inter({ subsets: ['latin'] })
export default function Home() {

  return (
    <>
      <Head>
        <title>V3 Crypto Hub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <Hero />

        <div className=' flex justify-evenly flex-wrap gap-10'>
          <div className=''>
            <TrendingCoins />
            <HomeComnponent />
          </div>

        </div>
      </div>

    </>
  )
}
