import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { space } from '../../styles/spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: ${space[16]};
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${space[8]};
`

const PaginationControlButton = styled.button`
  box-sizing: border-box;
  border: none;
  background: ${colors.neutral300};
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.bodySm};
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.tight};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const PageCircle = styled(PaginationControlButton)`
  width: 30px;
  height: 30px;
  padding: 0;
  border-radius: 50%;
`

export const EllipsisCircle = styled.span`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${colors.neutral300};
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.bodySm};
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.controlMd};
  text-align: center;
  flex-shrink: 0;
  user-select: none;
`

export const NextPill = styled(PaginationControlButton)`
  height: 30px;
  padding: 0 ${space[14]};
  border-radius: 18px;
`
