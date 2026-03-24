import styled from '@emotion/styled'
import { coverImageBackground } from '../../styles/cssUtils'
import { colors } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/tokens'

export const Root = styled.article`
  width: 143px;
  flex-shrink: 0;
`

export const ImageArea = styled.div<{ $imageSrc: string }>`
  width: 143px;
  height: 143px;
  aspect-ratio: 1 / 1;
  border-radius: 14px 14px 0 0;
  background: ${({ $imageSrc }) => coverImageBackground($imageSrc)};
`

export const Caption = styled.div`
  box-sizing: border-box;
  width: 143px;
  min-height: 78px;
  height: 78px;
  padding: 8px 10px;
  border-radius: 0 0 14px 14px;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const CaptionText = styled.p`
  margin: 0;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: pre-line;
`
