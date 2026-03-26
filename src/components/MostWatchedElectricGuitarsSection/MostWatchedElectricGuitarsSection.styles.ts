import styled from '@emotion/styled'
import { productCardDims } from '../../styles/productCardPrimitives'
import { FlexWrapRow, HomeSection, HomeSectionTitle } from '../../styles/shared.styles'
import { space } from '../../styles/spacing'

export const Section = HomeSection
export const Title = HomeSectionTitle

export const Row = styled(FlexWrapRow)`
  align-items: center;
`

export const QuadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, ${productCardDims.default.card}px);
  grid-auto-rows: ${productCardDims.default.card}px;
  gap: ${space[16]};
`

export const CenterSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`
