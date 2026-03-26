import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { CardColumnStack } from '../../styles/shared.styles'
import { space } from '../../styles/spacing'
import { FONT_FAMILY } from '../../styles/tokens'

export const Root = styled(CardColumnStack)``

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 164px;
  align-self: flex-start;
`

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: ${space[4]};
`

export const GreatValueTag = styled.span`
  font-family: ${FONT_FAMILY};
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${colors.neutral800};
`
