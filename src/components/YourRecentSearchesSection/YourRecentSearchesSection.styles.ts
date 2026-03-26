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

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${space[16]};
  justify-content: center;
  align-items: flex-start;
`
