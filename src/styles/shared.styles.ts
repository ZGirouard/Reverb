import styled from '@emotion/styled'
import { colors } from './colors'
import { space } from './spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from './tokens'

export const FiveColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${space[8]};
`

export const CardColumnStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space[4]};
  width: 100%;
  min-width: 0;
`

export const FilterChip = styled.span`
  flex-shrink: 0;
  border-radius: 6px;
  background: ${colors.neutral200};
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.caption};
  font-style: normal;
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.normal};
  padding: ${space[8]} ${space[10]};
  white-space: nowrap;
  user-select: none;
`
