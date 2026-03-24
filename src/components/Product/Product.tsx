import React, { type ReactNode } from 'react'
import IconLabel from '../IconLabel/IconLabel'
import ItemLabel from '../ItemLabel/ItemLabel'
import Price from '../Price/Price'
import ProductImage from '../ProductImage/ProductImage'
import Quality from '../Quality/Quality'
import ReverbBump from '../ReverbBump/ReverbBump'
import { Root, TagsRow } from './Product.styles'

export type ProductProps = {
  imageSrc: string
  imageAlt?: string
  reverbBump?: ReactNode
  description: ReactNode
  quality: ReactNode
  price: ReactNode
  showFreeShipping?: boolean
  showReturnPolicy?: boolean
  className?: string
}

export default function Product({
  imageSrc,
  imageAlt,
  reverbBump,
  description,
  quality,
  price,
  showFreeShipping = false,
  showReturnPolicy = false,
  className,
}: ProductProps) {
  const showTags = showFreeShipping || showReturnPolicy

  return (
    <Root className={className}>
      <ProductImage src={imageSrc} alt={imageAlt} />
      {reverbBump != null ? <ReverbBump>{reverbBump}</ReverbBump> : null}
      <ItemLabel>{description}</ItemLabel>
      <Quality>{quality}</Quality>
      <Price>{price}</Price>
      {showTags ? (
        <TagsRow>
          {showFreeShipping ? <IconLabel variant="freeShipping" /> : null}
          {showReturnPolicy ? <IconLabel variant="returnPolicy" /> : null}
        </TagsRow>
      ) : null}
    </Root>
  )
}
