import type { ProductListing } from '../../data/products'
import {
  DropLabel,
  FavoriteTopRight,
  ImageArea,
  ImageBlock,
  PriceDropBadge,
  Pricing,
  ProductTitle,
  Root,
  SalePrice,
  WasPrice,
  WasRow,
} from './HotDealProductCard.styles'

export type HotDealProductCardProps = {
  product: ProductListing & { wasPrice: string; priceDropLabel: string }
  onFavoriteClick?: () => void
  favoriteAriaLabel?: string
}

export default function HotDealProductCard({
  product,
  onFavoriteClick,
  favoriteAriaLabel,
}: HotDealProductCardProps) {
  return (
    <Root>
      <ImageBlock>
        <ImageArea
          $imageSrc={product.imageSrc}
          role={product.imageAlt !== '' ? 'img' : undefined}
          aria-label={product.imageAlt !== '' ? product.imageAlt : undefined}
        />
        <FavoriteTopRight onClick={onFavoriteClick} aria-label={favoriteAriaLabel} />
      </ImageBlock>
      <PriceDropBadge>PRICE DROP</PriceDropBadge>
      <ProductTitle>{product.description}</ProductTitle>
      <Pricing>
        <WasRow>
          <WasPrice>{product.wasPrice}</WasPrice>
          <DropLabel>{product.priceDropLabel}</DropLabel>
        </WasRow>
        <SalePrice>{product.price}</SalePrice>
      </Pricing>
    </Root>
  )
}
