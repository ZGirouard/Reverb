import styled from '@emotion/styled'
import { coverImageBackground } from '../../styles/cssUtils'
import { CardColumnStack } from '../../styles/shared.styles'
import { FONT_FAMILY } from '../../styles/tokens'

export const Root = styled(CardColumnStack)``

export const ImageFrame = styled.div<{ $imageSrc: string }>`
  width: 147px;
  height: 147px;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
  border-radius: 14px;
  background: ${({ $imageSrc }) => coverImageBackground($imageSrc)};
`

export const Meta = styled.p`
  margin: 0;
  color: #cacaca;
  font-family: ${FONT_FAMILY};
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const RatingRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
`

export const Stars = styled.span`
  display: inline-flex;
  gap: 1px;
  color: #000;
  font-family: ${FONT_FAMILY};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.02em;
`

export const ReviewCount = styled.span`
  color: #000;
  font-family: ${FONT_FAMILY};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
