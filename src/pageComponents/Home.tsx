import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HomeHero from '../components/HomeHero/HomeHero'
import HotDealsSection from '../components/HotDealsSection/HotDealsSection'
import BrowseByCategorySection from '../components/BrowseByCategorySection/BrowseByCategorySection'
import ScanDownloadBanner from '../components/ScanDownloadBanner/ScanDownloadBanner'
import JustListedSection from '../components/JustListedSection/JustListedSection'
import MostWatchedElectricGuitarsSection from '../components/MostWatchedElectricGuitarsSection/MostWatchedElectricGuitarsSection'
import YourRecentSearchesSection from '../components/YourRecentSearchesSection/YourRecentSearchesSection'
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
      <YourRecentSearchesSection />
      <SellGearSection />
      <HotDealsSection />
      <JustListedSection />
      <BrowseByCategorySection />
      <ScanDownloadBanner />
      <Footer />
    </HomePage>
  )
}
