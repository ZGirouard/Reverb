import { useMemo } from 'react'
import { products } from '../../data/products'
import { sampleRandom } from '../../utils/randomSample'
import Product from '../Product/Product'
import { Grid, Section, Title } from './RecentlyViewedSection.styles'

const PICK_COUNT = 6

export default function RecentlyViewedSection() {
  const items = useMemo(() => sampleRandom(products, PICK_COUNT), [])

  return (
    <Section>
      <Title id="recently-viewed-heading">Based on your recently viewed</Title>
      <Grid>
        {items.map((item) => (
          <Product
            key={item.id}
            imageSrc={item.imageSrc}
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
