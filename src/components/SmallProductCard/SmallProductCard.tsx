import React, { type ReactNode } from 'react'
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
  imageAlt?: string
  price: ReactNode
  name: ReactNode
  className?: string
  size?: CardSize
  onFavoriteClick?: () => void
  favoriteAriaLabel?: string
}

export default function SmallProductCard({
  imageSrc,
  imageAlt,
  price,
  name,
  className,
  size = 'default',
  onFavoriteClick,
  favoriteAriaLabel,
}: SmallProductCardProps) {
  return (
    <Root className={className} $size={size}>
      <ImageArea
        $imageSrc={imageSrc}
        $size={size}
        role={imageAlt != null && imageAlt !== '' ? 'img' : undefined}
        aria-label={imageAlt != null && imageAlt !== '' ? imageAlt : undefined}
      />
      <FavoriteTopRight $size={size} onClick={onFavoriteClick} aria-label={favoriteAriaLabel} />
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
