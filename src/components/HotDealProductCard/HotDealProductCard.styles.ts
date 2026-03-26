import styled from '@emotion/styled'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import { coverImageBackground } from '../../styles/cssUtils'
import { space } from '../../styles/spacing'
import { FONT_FAMILY } from '../../styles/tokens'

const card = 146
const imgR = 14

export const Root = styled.article`
  box-sizing: border-box;
  width: ${card}px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${space[6]};
`

export const ImageBlock = styled.div`
  position: relative;
  width: ${card}px;
  height: ${card}px;
  flex-shrink: 0;
`

export const ImageArea = styled.div<{ $imageSrc: string }>`
  width: ${card}px;
  height: ${card}px;
  aspect-ratio: 1 / 1;
  border-radius: ${imgR}px;
  background: ${({ $imageSrc }) => coverImageBackground($imageSrc)};
`

export const FavoriteTopRight = styled(FavoriteButton)`
  position: absolute;
  top: ${space[6]};
  right: ${space[6]};
  left: auto;
  z-index: 1;
`

export const PriceDropBadge = styled.p`
  margin: 0;
  color: #d90f07;
  font-family: ${FONT_FAMILY};
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const ProductTitle = styled.h3`
  margin: 0;
  width: 100%;
  color: #000;
  font-family: ${FONT_FAMILY};
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`

export const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space[4]};
  width: 100%;
`

export const WasRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${space[6]};
`

export const WasPrice = styled.span`
  color: #b1b1b1;
  font-family: ${FONT_FAMILY};
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: line-through;
`

export const DropLabel = styled.span`
  color: #da1811;
  font-family: ${FONT_FAMILY};
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const SalePrice = styled.p`
  margin: 0;
  color: #000;
  font-family: ${FONT_FAMILY};
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
`
