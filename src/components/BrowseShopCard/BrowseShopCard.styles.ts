import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { coverImageBackground } from '../../styles/cssUtils'
import { CardColumnStack } from '../../styles/shared.styles'
import { space } from '../../styles/spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'

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
  color: ${colors.neutral350};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.caption};
  font-style: normal;
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.normal};
`

export const RatingRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${space[4]};
`

export const Stars = styled.span`
  display: inline-flex;
  gap: ${space[1]};
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.caption};
  font-style: normal;
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.normal};
`

export const ReviewCount = styled.span`
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.caption};
  font-style: normal;
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.normal};
`
