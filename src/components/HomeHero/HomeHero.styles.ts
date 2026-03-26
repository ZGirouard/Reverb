import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/tokens'

const HERO_IMAGE = '/heroBackground.png'

export const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  min-height: 320px;
  margin-top: 16px;
  margin-bottom: 24px;
  padding: 32px 24px;
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
  flex: 1 1 360px;
  min-width: 0;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`

export const heroTitleStyles = css`
  margin: 0;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: pre-line;
`

export const Title = styled.h1`
  ${heroTitleStyles}
`

/** Same typography as {@link Title}; use for secondary page bands (single h1 per page). */
export const SectionTitle = styled.h2`
  ${heroTitleStyles}
`

export const Subtitle = styled.p`
  margin: 0;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: pre-line;
`

export const SignUpButton = styled.button`
  margin-top: 8px;
  padding: 12px 28px;
  border: none;
  border-radius: 999px;
  background: ${colors.black};
  color: ${colors.neutral150};
  font-family: ${FONT_FAMILY};
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${colors.neutral800};
    outline-offset: 3px;
  }
`

export const ProductsColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 16px;
  flex-shrink: 0;
`
