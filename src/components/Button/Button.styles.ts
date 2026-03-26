import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { space } from '../../styles/spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'

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
  font-size: ${fontSize.body};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: ${colors.neutral150};
    transition: all 0.3s ease;
  }
`
