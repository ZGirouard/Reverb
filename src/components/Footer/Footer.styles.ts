import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { space } from '../../styles/spacing'

export const Root = styled.footer`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`

export const FooterTop = styled.div`
  box-sizing: border-box;
  height: 264px;
  background: ${colors.neutral900};
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`

export const TopSlot = styled.div`
  box-sizing: border-box;
  min-width: 0;
  height: 100%;
  padding: ${space[16]} ${space[16]};
`

export const FooterBottom = styled.div`
  box-sizing: border-box;
  height: 133px;
  background: ${colors.neutral950};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: ${space[32]};
`

export const BottomSlot = styled.div`
  box-sizing: border-box;
  display: flex;
  min-width: 0;
  height: 100%;
  align-items: center;
  padding: ${space[16]};
`
