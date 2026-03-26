import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HomeHero from '../components/HomeHero/HomeHero'
import HotDealsSection from '../components/HotDealsSection/HotDealsSection'
import JustListedSection from '../components/JustListedSection/JustListedSection'
import MostWatchedElectricGuitarsSection from '../components/MostWatchedElectricGuitarsSection/MostWatchedElectricGuitarsSection'
import RecentlyViewedSection from '../components/RecentlyViewedSection/RecentlyViewedSection'
import SellGearSection from '../components/SellGearSection/SellGearSection'
import TopBrandsSection from '../components/TopBrandsSection/TopBrandsSection'
import { HomePage } from './layout.styles'

export default function Home() {
  return (
    <HomePage>
      <Header />
      <HomeHero />
      <TopBrandsSection />
      <RecentlyViewedSection />
      <MostWatchedElectricGuitarsSection />
      <SellGearSection />
      <HotDealsSection />
      <JustListedSection />
      <Footer />
    </HomePage>
  )
}
