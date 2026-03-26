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
}

export default function HotDealProductCard({
  product,
  onFavoriteClick,
}: HotDealProductCardProps) {
  return (
    <Root>
      <ImageBlock>
        <ImageArea $imageSrc={product.imageSrc} />
        <FavoriteTopRight onClick={onFavoriteClick} />
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
