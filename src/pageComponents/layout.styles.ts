import styled from '@emotion/styled'
import { space } from '../styles/spacing'

const pageShell = `
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${space[16]} ${space[32]};
`

export const Page = styled.main`
  ${pageShell}
  max-width: 848px;
`

export const HomePage = styled.main`
  ${pageShell}
  max-width: 1024px;
`
