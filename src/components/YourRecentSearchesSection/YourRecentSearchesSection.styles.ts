import styled from '@emotion/styled'
import { FONT_FAMILY } from '../../styles/tokens'

export const Section = styled.section`
  margin-top: 8px;
  margin-bottom: 24px;
`

export const Title = styled.h2`
  margin: 0 0 16px;
  color: #000;
  font-family: ${FONT_FAMILY};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: flex-start;
`
