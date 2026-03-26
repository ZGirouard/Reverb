import styled from '@emotion/styled'
import { coverImageBackground } from './cssUtils'

export const productCardDims = {
  default: { card: 146, plateW: 122, plateH: 44, imgR: 14, plateR: 15 },
  large: { card: 300, plateW: 251, plateH: 90, imgR: 29, plateR: 31 },
} as const

export type ProductCardSize = keyof typeof productCardDims

export const ProductCardThumbImageArea = styled.div<{ $imageSrc: string; $size?: ProductCardSize }>`
  width: ${({ $size = 'default' }) => productCardDims[$size].card}px;
  height: ${({ $size = 'default' }) => productCardDims[$size].card}px;
  aspect-ratio: 1 / 1;
  border-radius: ${({ $size = 'default' }) => productCardDims[$size].imgR}px;
  background: ${({ $imageSrc }) => coverImageBackground($imageSrc)};
`
