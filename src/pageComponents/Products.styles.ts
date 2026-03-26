import styled from '@emotion/styled'
import { colors } from '../styles/colors'
import { FiveColumnGrid } from '../styles/shared.styles'
import { space } from '../styles/spacing'
import { FONT_FAMILY } from '../styles/tokens'

export const CategoryTitle = styled.h1`
  margin: ${space[16]} ${space[0]} ${space[12]};
  width: 100%;
  text-align: left;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const List = styled(FiveColumnGrid)`
  margin-top: 0;
  margin-bottom: ${space[16]};
`
