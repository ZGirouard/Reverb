import styled from '@emotion/styled'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import { coverImageBackground } from '../../styles/cssUtils'
import { space } from '../../styles/spacing'
import { FONT_FAMILY } from '../../styles/tokens'

export type CardSize = 'default' | 'large'

const DIM: Record<
  CardSize,
  { card: number; plateW: number; plateH: number; font: number; imgR: number; plateR: number }
> = {
  default: { card: 146, plateW: 122, plateH: 44, font: 13, imgR: 14, plateR: 15 },
  large: { card: 300, plateW: 251, plateH: 90, font: 27, imgR: 29, plateR: 31 },
}

export const Root = styled.article<{ $size: CardSize }>`
  position: relative;
  width: ${({ $size }) => DIM[$size].card}px;
  height: ${({ $size }) => DIM[$size].card}px;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
`

export const ImageArea = styled.div<{ $imageSrc: string; $size: CardSize }>`
  width: ${({ $size }) => DIM[$size].card}px;
  height: ${({ $size }) => DIM[$size].card}px;
  aspect-ratio: 1 / 1;
  border-radius: ${({ $size }) => DIM[$size].imgR}px;
  background: ${({ $imageSrc }) => coverImageBackground($imageSrc)};
`

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
  width: ${({ $size }) => DIM[$size].plateW}px;
  height: ${({ $size }) => DIM[$size].plateH}px;
  border-radius: ${({ $size }) => DIM[$size].plateR}px;
  background: #f9f9f9;
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
  return `
    margin: 0;
    width: 100%;
    min-width: 0;
    color: #000;
    font-family: ${FONT_FAMILY};
    font-size: ${DIM[$size].font}px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
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
