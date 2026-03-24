import React from 'react'
import BrowseGearSection from '../components/BrowseGearSection/BrowseGearSection'
import Footer from '../components/Footer/Footer'
import Pagination from '../components/Pagination/Pagination'
import Header from '../components/Header/Header'
import Product from '../components/Product/Product'
import { products } from '../data/products'
import { List, Page } from './Products.styles'

export default function Products() {
  return (
    <Page>
      <Header />
      <List>
        {products.map((item) => (
          <Product
            key={item.id}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            description={item.description}
            quality={item.quality}
            price={item.price}
            reverbBump={item.reverbBump}
            showFreeShipping={item.showFreeShipping}
            showReturnPolicy={item.showReturnPolicy}
            showGreatValue={item.showGreatValue}
          />
        ))}
      </List>
      <Pagination />
      <BrowseGearSection />
      <Footer />
    </Page>
  )
}
