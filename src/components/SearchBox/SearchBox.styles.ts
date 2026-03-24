import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/tokens'

export const Field = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 376px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid ${colors.black};
  background: ${colors.transparentNeutral};
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 38px 0 12px;
  border: none;
  border-radius: 9px;
  background: transparent;
  outline: none;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &::placeholder {
    color: ${colors.neutral600};
    font-family: ${FONT_FAMILY};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 1;
  }
`

export const IconWrap = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  img {
    width: 16px;
    height: 16px;
    display: block;
  }
`
