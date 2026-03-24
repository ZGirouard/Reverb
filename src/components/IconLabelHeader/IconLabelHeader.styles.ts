import styled from '@emotion/styled'
import { HeaderTextParagraph } from '../HeaderText/HeaderText.styles'

export const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

export const IconWrap = styled.span`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
    display: block;
  }
`

export const Label = styled(HeaderTextParagraph)`
  text-align: center;
`
