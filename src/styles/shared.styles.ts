import type { CSSProperties } from 'react'
import styled from '@emotion/styled'
import { colors } from './colors'
import { space } from './spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from './tokens'

export const HomeSection = styled.section`
  margin-top: ${space[8]};
  margin-bottom: ${space[24]};
`

export const HomeSectionLoose = styled(HomeSection)`
  margin-top: ${space[16]};
  margin-bottom: ${space[32]};
`

export const HomeSectionTitle = styled.h2`
  margin: 0 0 ${space[16]};
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.titleSm};
  font-style: normal;
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.normal};
`

type FlexWrapRowProps = {
  $alignItems?: CSSProperties['alignItems']
  $justifyContent?: CSSProperties['justifyContent']
}

export const FlexWrapRow = styled.div<FlexWrapRowProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${space[16]};
  align-items: ${({ $alignItems = 'stretch' }) => $alignItems};
  justify-content: ${({ $justifyContent = 'flex-start' }) => $justifyContent};
`

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
