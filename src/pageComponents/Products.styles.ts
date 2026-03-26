import styled from '@emotion/styled'
import { colors } from '../styles/colors'
import { FiveColumnGrid } from '../styles/shared.styles'
import { space } from '../styles/spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../styles/tokens'

export const CategoryTitle = styled.h1`
  margin: ${space[16]} ${space[0]} ${space[12]};
  width: 100%;
  text-align: left;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.displayMd};
  font-style: normal;
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.normal};
`

export const List = styled(FiveColumnGrid)`
  margin-top: 0;
  margin-bottom: ${space[16]};
`
