import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HomeHero from '../components/HomeHero/HomeHero'
import { HomePage } from './layout.styles'

export default function Home() {
  return (
    <HomePage>
      <Header />
      <HomeHero />
      <Footer />
    </HomePage>
  )
}
