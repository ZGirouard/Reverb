import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'

export const PriceParagraph = styled.p`
  margin: 0;
  color: ${colors.neutral800};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.titleSm};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
`
