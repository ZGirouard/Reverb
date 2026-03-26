import React, { useMemo } from 'react'
import type { ProductListing } from '../../data/products'
import { products } from '../../data/products'
import Product from '../Product/Product'
import { Grid, Section, Title } from './RecentlyViewedSection.styles'

const PICK_COUNT = 6

function pickRandomProducts(source: ProductListing[], count: number): ProductListing[] {
  const copy = [...source]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, Math.min(count, copy.length))
}

export default function RecentlyViewedSection() {
  const items = useMemo(() => pickRandomProducts(products, PICK_COUNT), [])

  return (
    <Section aria-labelledby="recently-viewed-heading">
      <Title id="recently-viewed-heading">Based on your recently viewed</Title>
      <Grid>
        {items.map((item) => (
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
      </Grid>
    </Section>
  )
}
