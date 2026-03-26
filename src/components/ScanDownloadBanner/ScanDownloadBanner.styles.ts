import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { HomeSection } from '../../styles/shared.styles'
import { space } from '../../styles/spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'

export const Section = HomeSection

export const Band = styled.div`
  box-sizing: border-box;
  width: 962px;
  max-width: 100%;
  height: 212px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 11px;
  background: ${colors.promoYellow};
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
`

export const LeftQuarter = styled.div`
  flex: 0 0 25%;
  width: 25%;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${space[8]};
  box-sizing: border-box;
`

export const WhiteCard = styled.div`
  box-sizing: border-box;
  width: 111px;
  height: 168px;
  border-radius: 11px;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${space[10]} ${space[6]} ${space[12]};
  gap: ${space[10]};
`

export const ScanText = styled.p`
  margin: 0;
  color: ${colors.neutral800};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.label};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
  text-align: center;
  white-space: pre-line;
`

export const QrImage = styled.img`
  width: 95px;
  height: 87px;
  display: block;
  object-fit: contain;
  flex-shrink: 0;
`

export const MiddleHalf = styled.div`
  flex: 0 0 50%;
  width: 50%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: ${space[12]} ${space[20]};
  box-sizing: border-box;
`

export const Headline = styled.h2`
  margin: 0 0 ${space[12]};
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.displaySm};
  font-style: normal;
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.normal};
  white-space: pre-line;
`

export const Subheadline = styled.p`
  margin: 0;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.titleSm};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
  white-space: pre-line;
`

export const RightQuarter = styled.div`
  flex: 0 0 25%;
  width: 25%;
  min-width: 0;
  position: relative;
  height: 100%;
  box-sizing: border-box;
`

export const KeyboardCut = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: bottom right;
  display: block;
`
