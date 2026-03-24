import React, { type ReactNode } from 'react'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import IconLabel from '../IconLabel/IconLabel'
import ItemLabel from '../ItemLabel/ItemLabel'
import Price from '../Price/Price'
import ProductImage from '../ProductImage/ProductImage'
import Quality from '../Quality/Quality'
import ReverbBump from '../ReverbBump/ReverbBump'
import { ImageWrap, Root, TagsRow } from './Product.styles'

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
  onFavoriteClick?: () => void
  favoriteAriaLabel?: string
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
  onFavoriteClick,
  favoriteAriaLabel,
}: ProductProps) {
  const showTags = showFreeShipping || showReturnPolicy

  return (
    <Root className={className}>
      <ImageWrap>
        <ProductImage src={imageSrc} alt={imageAlt} />
        <FavoriteButton onClick={onFavoriteClick} aria-label={favoriteAriaLabel} />
      </ImageWrap>
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
