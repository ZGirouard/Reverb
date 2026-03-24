import styled from '@emotion/styled'
import { colors } from '../../styles/colors'

export const Button = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 1;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${colors.neutral800};
    outline-offset: 2px;
  }

  img {
    width: 16px;
    height: 16px;
    display: block;
  }
`
