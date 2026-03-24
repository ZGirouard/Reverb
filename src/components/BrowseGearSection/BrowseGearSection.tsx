import React from 'react'
import BrowseShopCard from '../BrowseShopCard/BrowseShopCard'
import { browseShops } from '../../data/browseShops'
import { Grid, Section, Title } from './BrowseGearSection.styles'

export default function BrowseGearSection() {
  return (
    <Section aria-labelledby="browse-gear-heading">
      <Title id="browse-gear-heading">Browse More Gear from Top Shops</Title>
      <Grid>
        {browseShops.map((shop) => (
          <BrowseShopCard
            key={shop.id}
            imageSrc={shop.imageSrc}
            imageAlt={shop.imageAlt}
            title={shop.title}
            metaLine={shop.metaLine}
            reviewCount={shop.reviewCount}
          />
        ))}
      </Grid>
    </Section>
  )
}
