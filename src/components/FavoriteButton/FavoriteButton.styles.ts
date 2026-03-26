import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { space } from '../../styles/spacing'

export const Button = styled.button`
  position: absolute;
  top: ${space[6]};
  right: ${space[6]};
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
    outline-offset: ${space[2]};
  }

  img {
    width: 16px;
    height: 16px;
    display: block;
  }
`
