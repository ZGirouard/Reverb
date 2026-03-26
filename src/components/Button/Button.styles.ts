import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { space } from '../../styles/spacing'
import { FONT_FAMILY } from '../../styles/tokens'

export const Root = styled.button`
  box-sizing: border-box;
  width: 155px;
  height: 32px;
  padding: 0 ${space[10]};
  margin: 0;
  border: 1px solid ${colors.black};
  border-radius: 23px;
  background: ${colors.white};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus-visible {
    outline: 2px solid ${colors.neutral800};
    outline-offset: ${space[2]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
