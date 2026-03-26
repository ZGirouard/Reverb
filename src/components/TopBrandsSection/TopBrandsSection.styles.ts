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

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[16]};
`

export const BrandTile = styled.img`
  width: 141px;
  height: 132px;
  border-radius: 11px;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
`
