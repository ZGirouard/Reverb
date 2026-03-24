import styled from '@emotion/styled'

const pageShell = `
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px 32px;
`

export const Page = styled.main`
  ${pageShell}
  max-width: 848px;
`

export const HomePage = styled.main`
  ${pageShell}
  max-width: 1024px;
`
