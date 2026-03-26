import { type ReactNode } from 'react'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import IconLabel from '../IconLabel/IconLabel'
import ItemLabel from '../ItemLabel/ItemLabel'
import Price from '../Price/Price'
import ProductImage from '../ProductImage/ProductImage'
import Quality from '../Quality/Quality'
import ReverbBump from '../ReverbBump/ReverbBump'
import { GreatValueTag, ImageWrap, Root, TagsRow } from './Product.styles'

export type ProductProps = {
  imageSrc: string
  imageAlt?: string
  reverbBump?: ReactNode
  description: ReactNode
  quality: ReactNode
  price: ReactNode
  showFreeShipping?: boolean
  showReturnPolicy?: boolean
  showGreatValue?: boolean
  className?: string
  onFavoriteClick?: () => void
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
  showGreatValue = false,
  className,
  onFavoriteClick,
}: ProductProps) {
  const showTags = showFreeShipping || showReturnPolicy || showGreatValue

  return (
    <Root className={className}>
      <ImageWrap>
        <ProductImage src={imageSrc} alt={imageAlt} />
        <FavoriteButton onClick={onFavoriteClick} />
      </ImageWrap>
      {reverbBump != null ? <ReverbBump>{reverbBump}</ReverbBump> : null}
      <ItemLabel>{description}</ItemLabel>
      <Quality>{quality}</Quality>
      <Price>{price}</Price>
      {showTags ? (
        <TagsRow>
          {showFreeShipping ? <IconLabel variant="freeShipping" /> : null}
          {showReturnPolicy ? <IconLabel variant="returnPolicy" /> : null}
          {showGreatValue ? <GreatValueTag>Great Value</GreatValueTag> : null}
        </TagsRow>
      ) : null}
    </Root>
  )
}
