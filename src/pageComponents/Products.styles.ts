import styled from '@emotion/styled'
import { colors } from '../styles/colors'
import { FiveColumnGrid } from '../styles/shared.styles'
import { FONT_FAMILY } from '../styles/tokens'

export const Page = styled.main`
  box-sizing: border-box;
  max-width: 848px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px 32px;
`

export const CategoryTitle = styled.h1`
  margin: 16px 0 12px;
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
  margin-bottom: 16px;
`
