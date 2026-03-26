import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { space } from '../../styles/spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'

const HERO_IMAGE = '/heroBackground.png'

export const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  min-height: 320px;
  margin-top: ${space[16]};
  margin-bottom: ${space[24]};
  padding: ${space[32]} ${space[24]};
  background: url(${JSON.stringify(HERO_IMAGE)}) ${colors.imagePlaceholder} 50% / cover no-repeat;
  border-radius: 14px;
  overflow: hidden;
`

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`

export const Left = styled.div`
  flex: 1 1 400px;
  min-width: 0;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${space[16]};
`

export const heroTitleStyles = css`
  margin: 0;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.displayLg};
  font-style: normal;
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.normal};
  white-space: pre-line;
`

export const Title = styled.h1`
  ${heroTitleStyles}
`

export const SectionTitle = styled.h2`
  ${heroTitleStyles}
`

export const Subtitle = styled.p`
  margin: 0;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.titleMd};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
  white-space: pre-line;
`

export const SignUpButton = styled.button`
  margin-top: ${space[8]};
  padding: ${space[12]} ${space[28]};
  border: none;
  border-radius: 999px;
  background: ${colors.black};
  color: ${colors.neutral150};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.bodyXL};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
  cursor: pointer;
`

export const ProductsColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: ${space[16]};
  flex-shrink: 0;
`
