import { type ReactNode } from 'react'
import type { CardSize } from './SmallProductCard.styles'
import {
  FavoriteTopRight,
  ImageArea,
  NameLine,
  NameOverlay,
  NamePlate,
  PillStack,
  PriceLine,
  Root,
} from './SmallProductCard.styles'

export type SmallProductCardProps = {
  imageSrc: string
  price: ReactNode
  name: ReactNode
  className?: string
  size?: CardSize
  onFavoriteClick?: () => void
}

export default function SmallProductCard({
  imageSrc,
  price,
  name,
  className,
  size = 'default',
  onFavoriteClick,
}: SmallProductCardProps) {
  return (
    <Root className={className} $size={size}>
      <ImageArea $imageSrc={imageSrc} $size={size} />
      <FavoriteTopRight $size={size} onClick={onFavoriteClick} />
      <NameOverlay $size={size}>
        <NamePlate $size={size}>
          <PillStack>
            <PriceLine $size={size}>{price}</PriceLine>
            <NameLine $size={size}>{name}</NameLine>
          </PillStack>
        </NamePlate>
      </NameOverlay>
    </Root>
  )
}
