import styled from '@emotion/styled'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import { colors } from '../../styles/colors'
import {
  productCardDims,
  ProductCardThumbImageArea,
  type ProductCardSize,
} from '../../styles/productCardPrimitives'
import { space } from '../../styles/spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'

export type CardSize = ProductCardSize

export const Root = styled.article<{ $size: CardSize }>`
  position: relative;
  width: ${({ $size }) => productCardDims[$size].card}px;
  height: ${({ $size }) => productCardDims[$size].card}px;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
`

export const ImageArea = ProductCardThumbImageArea

export const FavoriteTopRight = styled(FavoriteButton)<{ $size: CardSize }>`
  top: ${({ $size }) => ($size === 'large' ? space[12] : space[6])};
  right: ${({ $size }) => ($size === 'large' ? space[12] : space[6])};
  left: auto;
  z-index: 2;
`

export const NameOverlay = styled.div<{ $size: CardSize }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 0 ${({ $size }) => ($size === 'large' ? space[12] : space[6])} ${({ $size }) =>
    $size === 'large' ? space[12] : space[6]};
  box-sizing: border-box;
  z-index: 1;
  pointer-events: none;
`

export const NamePlate = styled.div<{ $size: CardSize }>`
  box-sizing: border-box;
  width: ${({ $size }) => productCardDims[$size].plateW}px;
  height: ${({ $size }) => productCardDims[$size].plateH}px;
  border-radius: ${({ $size }) => productCardDims[$size].plateR}px;
  background: ${colors.surfacePill};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${space[8]};
`

export const PillStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${space[2]};
  width: 100%;
  min-width: 0;
`

function pillLineCss($size: CardSize) {
  const fs = $size === 'large' ? fontSize.titleLg : fontSize.body
  return `
    margin: 0;
    width: 100%;
    min-width: 0;
    color: ${colors.black};
    font-family: ${FONT_FAMILY};
    font-size: ${fs};
    font-style: normal;
    font-weight: ${fontWeight.semibold};
    line-height: ${lineHeight.normal};
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `
}

export const PriceLine = styled.p<{ $size: CardSize }>`
  ${({ $size }) => pillLineCss($size)}
`

export const NameLine = styled.p<{ $size: CardSize }>`
  ${({ $size }) => pillLineCss($size)}
`
