import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { FiveColumnGrid } from '../../styles/shared.styles'
import { space } from '../../styles/spacing'
import { FONT_FAMILY } from '../../styles/tokens'

export const Section = styled.section`
  margin-top: ${space[16]};
  margin-bottom: ${space[32]};
`

export const Title = styled.h2`
  margin: 0 0 ${space[16]};
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Grid = styled(FiveColumnGrid)``
