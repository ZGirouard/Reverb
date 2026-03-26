import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { space } from '../../styles/spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'

export const root = css`
  display: inline-flex;
  align-items: center;
  gap: ${space[8]};
`

export const IconContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`

export const IconWrap = styled.div`
  color: ${colors.neutral700};

  svg,
  img {
    width: 16px;
    height: 13px;
    display: block;
  }
`

export const Label = styled.p`
  margin: 0;
  font-size: ${fontSize.caption};
  line-height: ${lineHeight.snug};
  font-family: ${FONT_FAMILY};
  font-weight: ${fontWeight.semibold};
  color: ${colors.neutral800};
`
