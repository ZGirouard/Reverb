import styled from '@emotion/styled'

export const Section = styled.section`
  margin-top: 16px;
  margin-bottom: 32px;
`

export const Title = styled.h2`
  margin: 0 0 16px;
  color: #000;
  font-family: Inter, system-ui, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
`
