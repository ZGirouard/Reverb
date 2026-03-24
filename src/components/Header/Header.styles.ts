import styled from '@emotion/styled'
import { Root as BaseButton } from '../Button/Button.styles'

export const Root = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 848px;
`

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 8px;
`

export const Logo = styled.img`
  display: block;
  height: 32px;
  width: auto;
  flex-shrink: 0;
`

export const SellGearButton = styled(BaseButton)`
  width: auto;
  max-width: none;
  padding: 0 14px;
`

export const Divider = styled.hr`
  display: block;
  width: 100%;
  height: 0;
  margin: 0;
  border: 0;
  border-top: 1px solid #d9d9d9;
`

export const NavRow = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 8px;
`
