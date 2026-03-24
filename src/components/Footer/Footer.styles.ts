import styled from '@emotion/styled'

export const Root = styled.footer`
  box-sizing: border-box;
  width: 100%;
  max-width: 848px;
  margin-left: auto;
  margin-right: auto;
`

export const FooterTop = styled.div`
  box-sizing: border-box;
  height: 264px;
  background: #212121;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`

export const TopSlot = styled.div`
  box-sizing: border-box;
  min-width: 0;
  height: 100%;
  padding: 16px 16px;
`

export const FooterBottom = styled.div`
  box-sizing: border-box;
  height: 133px;
  background: #121212;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`

export const BottomSlot = styled.div`
  box-sizing: border-box;
  min-width: 0;
  height: 100%;
`
