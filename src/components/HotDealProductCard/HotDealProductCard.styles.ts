import styled from '@emotion/styled'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import { colors } from '../../styles/colors'
import { productCardDims, ProductCardThumbImageArea } from '../../styles/productCardPrimitives'
import { space } from '../../styles/spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'

const { card } = productCardDims.default

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

export const ImageArea = ProductCardThumbImageArea

export const FavoriteTopRight = styled(FavoriteButton)`
  position: absolute;
  top: ${space[6]};
  right: ${space[6]};
  left: auto;
  z-index: 1;
`

export const PriceDropBadge = styled.p`
  margin: 0;
  color: ${colors.priceDrop};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.caption};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
`

export const ProductTitle = styled.h3`
  margin: 0;
  width: 100%;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.body};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
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
  color: ${colors.neutral420};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.caption};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
  text-decoration-line: line-through;
`

export const DropLabel = styled.span`
  color: ${colors.priceDropAccent};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.caption};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
`

export const SalePrice = styled.p`
  margin: 0;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.body};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
  text-align: left;
`
