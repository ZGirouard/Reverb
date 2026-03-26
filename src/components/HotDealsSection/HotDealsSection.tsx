import { useMemo } from 'react'
import type { ProductListing } from '../../data/products'
import { products } from '../../data/products'
import { shuffle } from '../../utils/shuffle'
import HotDealProductCard from '../HotDealProductCard/HotDealProductCard'
import { Row, Section, Title } from './HotDealsSection.styles'

function isHotDealProduct(
  p: ProductListing,
): p is ProductListing & { wasPrice: string; priceDropLabel: string } {
  return p.wasPrice != null && p.wasPrice !== '' && p.priceDropLabel != null && p.priceDropLabel !== ''
}

const PICK_COUNT = 6

export default function HotDealsSection() {
  const items = useMemo(() => {
    const pool = products.filter(isHotDealProduct)
    return shuffle(pool).slice(0, PICK_COUNT)
  }, [])

  return (
    <Section>
      <Title id="hot-deals-heading">Hot Deals on Gear You&apos;ll Love</Title>
      <Row>
        {items.map((item) => (
          <HotDealProductCard key={item.id} product={item} />
        ))}
      </Row>
    </Section>
  )
}
