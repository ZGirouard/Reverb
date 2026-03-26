import React from 'react'
import SimpleProduct from '../SimpleProduct/SimpleProduct'
import {
  Inner,
  Left,
  ProductsColumn,
  Section,
  SignUpButton,
  Subtitle,
  Title,
} from './HomeHero.styles'

const HERO_PRODUCTS = [
  {
    key: 'namm',
    imageSrc: '/Guitars/Guitar7.png',
    imageAlt: 'Guitar — NAMM spotlight',
    caption: 'LIVE: New from\nNAMM 2026',
  },
  {
    key: 'lifeson',
    imageSrc: '/Guitars/Guitar14.png',
    imageAlt: 'Guitar — Alex Lifeson spotlight',
    caption: "EXCLUSIVE: Alex Lifeson's\nATWAS Wah/Vol",
  },
  {
    key: 'trending',
    imageSrc: '/Guitars/Guitar21.png',
    imageAlt: 'Trending gear on Reverb',
    caption: 'TRENDING: The\nMost Watched\nGear on Reverb',
  },
] as const

export default function HomeHero() {
  return (
    <Section>
      <Inner style={{ alignItems: 'center' }}>
        <Left>
          <Title>{`Reverb’s better\nwhen you join in.`}</Title>
          <Subtitle>
            {`Unlock deals & dive into the greatest\nonline community of gear enthusiasts`}
          </Subtitle>
          <SignUpButton type="button">Sign Up Now</SignUpButton>
        </Left>
        <ProductsColumn>
          {HERO_PRODUCTS.map((item) => (
            <SimpleProduct
              key={item.key}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              caption={item.caption}
            />
          ))}
        </ProductsColumn>
      </Inner>
    </Section>
  )
}
