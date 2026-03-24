import styled from '@emotion/styled'

export const Page = styled.main`
  box-sizing: border-box;
  max-width: 848px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px 32px;
`

export const CategoryTitle = styled.h1`
  margin: 16px 0 12px;
  width: 100%;
  text-align: left;
  color: #000;
  font-family: Inter, system-ui, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
  margin-top: 0;
  margin-bottom: 16px;
`
