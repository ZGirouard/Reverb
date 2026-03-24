import styled from '@emotion/styled'
import { FONT_FAMILY } from './tokens'

export const FiveColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
`

export const CardColumnStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  min-width: 0;
`

export const FilterChip = styled.span`
  flex-shrink: 0;
  border-radius: 6px;
  background: #ededed;
  color: #000;
  font-family: ${FONT_FAMILY};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 8px 10px;
  white-space: nowrap;
  user-select: none;
`
