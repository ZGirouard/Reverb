import styled from '@emotion/styled'
import { Root as BaseButton } from '../Button/Button.styles'

export const Bar = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  width: 100%;
`

export const Logo = styled.img`
  display: block;
  height: 32px;
  width: auto;
  flex-shrink: 0;
`

/** Same look as `Button`, but wide enough for “Sell your gear” */
export const SellGearButton = styled(BaseButton)`
  width: auto;
  max-width: none;
  padding: 0 14px;
`
