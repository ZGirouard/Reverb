import { useMemo } from 'react'
import { products } from '../../data/products'
import SmallProductCard from '../SmallProductCard/SmallProductCard'
import { Section, Title } from '../MostWatchedElectricGuitarsSection/MostWatchedElectricGuitarsSection.styles'
import { Row } from './JustListedSection.styles'

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const PICK_COUNT = 6

export default function JustListedSection() {
  const items = useMemo(() => shuffle(products).slice(0, PICK_COUNT), [])

  return (
    <Section aria-labelledby="just-listed-heading">
      <Title id="just-listed-heading">Just listed</Title>
      <Row>
        {items.map((item) => (
          <SmallProductCard
            key={item.id}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            price={item.price}
            name={item.description}
          />
        ))}
      </Row>
    </Section>
  )
}
