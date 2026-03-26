import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/tokens'
import { Section as HeroSection } from '../HomeHero/HomeHero.styles'

const SELL_SECTION_BG = '/blueBackground.png'

export const Section = styled(HeroSection)`
  background: url(${JSON.stringify(SELL_SECTION_BG)}) ${colors.imagePlaceholder} 50% / cover no-repeat;
`

export const BenefitPanel = styled.div`
  box-sizing: border-box;
  width: 439px;
  height: 326px;
  border-radius: 17px;
  background: #e7faf8;
  padding: 32px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
`

export const BenefitRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
`

export const SearchIcon = styled.img`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: block;
  object-fit: contain;
`

export const BenefitText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  min-width: 0;
`

export const BenefitTitle = styled.h3`
  margin: 0;
  color: #000;
  font-family: ${FONT_FAMILY};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const BenefitSubtitle = styled.p`
  margin: 0;
  color: #000;
  font-family: ${FONT_FAMILY};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-line;
`
