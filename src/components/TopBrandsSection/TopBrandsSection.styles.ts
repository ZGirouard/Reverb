import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/tokens'

export const Section = styled.section`
  margin-top: 8px;
  margin-bottom: 24px;
`

export const Title = styled.h2`
  margin: 0 0 16px;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const BrandTile = styled.img`
  width: 141px;
  height: 132px;
  border-radius: 11px;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
`
