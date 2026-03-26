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
            loading="lazy"
          />
        ))}
      </Grid>
    </Section>
  )
}
