import styled from '@emotion/styled'
import { FiveColumnGrid } from '../../styles/shared.styles'
import { FONT_FAMILY } from '../../styles/tokens'

export const Section = styled.section`
  margin-top: 16px;
  margin-bottom: 32px;
`

export const Title = styled.h2`
  margin: 0 0 16px;
  color: #000;
  font-family: ${FONT_FAMILY};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Grid = styled(FiveColumnGrid)``
