import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/tokens'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

const paginationFocus = `
  &:focus-visible {
    outline: 2px solid ${colors.black};
    outline-offset: 2px;
  }
`

const PaginationControlButton = styled.button`
  box-sizing: border-box;
  border: none;
  background: ${colors.neutral300};
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${paginationFocus}
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
  font-size: 12px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  flex-shrink: 0;
  user-select: none;
`

export const NextPill = styled(PaginationControlButton)`
  height: 30px;
  padding: 0 14px;
  border-radius: 18px;
`
