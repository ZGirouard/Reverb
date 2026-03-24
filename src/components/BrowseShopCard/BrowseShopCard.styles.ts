import styled from '@emotion/styled'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  min-width: 0;
`

export const ImageFrame = styled.div<{ $imageSrc: string }>`
  width: 147px;
  height: 147px;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
  border-radius: 14px;
  background: url(${({ $imageSrc }) => JSON.stringify($imageSrc)}) lightgray 50% / cover no-repeat;
`

export const Meta = styled.p`
  margin: 0;
  color: #cacaca;
  font-family: Inter, system-ui, sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const RatingRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
`

export const Stars = styled.span`
  display: inline-flex;
  gap: 1px;
  color: #000;
  font-family: Inter, system-ui, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.02em;
`

export const ReviewCount = styled.span`
  color: #000;
  font-family: Inter, system-ui, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
