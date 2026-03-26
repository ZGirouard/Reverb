import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'

export const ReverbBumpParagraph = styled.p`
  margin: 0;
  color: ${colors.accentReverb};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.label};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
  text-transform: uppercase;
`
