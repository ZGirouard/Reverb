import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { space } from '../../styles/spacing'
import { Root as BaseButton } from '../Button/Button.styles'

export const Root = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
`

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: ${space[8]};
  width: 100%;
  padding: ${space[8]} ${space[8]};
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
  padding: 0 ${space[14]};
`

export const Divider = styled.hr`
  display: block;
  width: 100%;
  height: 0;
  margin: 0;
  border: 0;
  border-top: 1px solid ${colors.neutral300};
`

export const NavRow = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: ${space[8]};
  width: 100%;
  padding: ${space[8]} ${space[8]};
`
