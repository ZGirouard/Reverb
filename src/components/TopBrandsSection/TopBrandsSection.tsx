import React from 'react'
import { BrandTile, Grid, Section, Title } from './TopBrandsSection.styles'

const FENDER_SRC = '/fender.png'
const TILE_COUNT = 6

export default function TopBrandsSection() {
  return (
    <Section>
      <Title id="top-brands-heading">Save on gear from top brands</Title>
      <Grid>
        {Array.from({ length: TILE_COUNT }, (_, i) => (
          <BrandTile
            key={i}
            src={FENDER_SRC}
            alt={i === 0 ? 'Fender' : ''}
            loading="lazy"
            aria-hidden={i === 0 ? undefined : true}
          />
        ))}
      </Grid>
    </Section>
  )
}
