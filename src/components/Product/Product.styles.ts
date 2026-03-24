import styled from '@emotion/styled'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  min-width: 0;
`

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 164px;
  align-self: flex-start;
`

export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 4px;
`

export const GreatValueTag = styled.span`
  font-family: Inter, system-ui, sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #232323;
`
