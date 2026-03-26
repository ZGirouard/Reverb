import React, { useMemo } from 'react'
import type { ProductListing } from '../../data/products'
import { products } from '../../data/products'
import { shuffle } from '../../utils/shuffle'
import SmallProductCard from '../SmallProductCard/SmallProductCard'
import { CenterSlot, QuadGrid, Row, Section, Title } from './MostWatchedElectricGuitarsSection.styles'

function pickNineProducts(source: ProductListing[]): ProductListing[] {
  if (source.length >= 9) {
    return shuffle(source).slice(0, 9)
  }
  const out: ProductListing[] = []
  const shuffled = shuffle(source)
  while (out.length < 9) {
    out.push(...shuffled)
  }
  return out.slice(0, 9)
}

export default function MostWatchedElectricGuitarsSection() {
  const [leftQuad, center, rightQuad] = useMemo(() => {
    const [a, b, c, d, e, f, g, h, i] = pickNineProducts(products)
    return [
      [a, b, c, d],
      e,
      [f, g, h, i],
    ] as const
  }, [])

  return (
    <Section aria-labelledby="most-watched-electric-heading">
      <Title id="most-watched-electric-heading">Most Watched in Electric Guitars</Title>
      <Row>
        <QuadGrid>
          {leftQuad.map((item) => (
            <SmallProductCard
              key={item.id}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              price={item.price}
              name={item.description}
            />
          ))}
        </QuadGrid>
        <CenterSlot>
          <SmallProductCard
            size="large"
            imageSrc={center.imageSrc}
            imageAlt={center.imageAlt}
            price={center.price}
            name={center.description}
          />
        </CenterSlot>
        <QuadGrid>
          {rightQuad.map((item) => (
            <SmallProductCard
              key={item.id}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              price={item.price}
              name={item.description}
            />
          ))}
        </QuadGrid>
      </Row>
    </Section>
  )
}
