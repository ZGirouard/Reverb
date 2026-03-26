import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { space } from '../../styles/spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'

export const Section = styled.section`
  margin-top: ${space[8]};
  margin-bottom: ${space[24]};
`

export const Title = styled.h2`
  margin: 0 0 ${space[16]};
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.titleSm};
  font-style: normal;
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.normal};
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[16]};
  align-items: center;
`

export const QuadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 146px);
  grid-auto-rows: 146px;
  gap: ${space[16]};
`

export const CenterSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`
