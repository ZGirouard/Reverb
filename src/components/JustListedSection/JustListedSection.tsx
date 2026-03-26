import { useMemo } from 'react'
import { products } from '../../data/products'
import { sampleRandom } from '../../utils/randomSample'
import Product from '../Product/Product'
import { Title } from '../TopBrandsSection/TopBrandsSection.styles'
import { Grid, Section } from '../RecentlyViewedSection/RecentlyViewedSection.styles'

const PICK_COUNT = 6

export default function JustListedSection() {
  const items = useMemo(() => sampleRandom(products, PICK_COUNT), [])

  return (
    <Section>
      <Title id="just-listed-heading">Just listed</Title>
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
