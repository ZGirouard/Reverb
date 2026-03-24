import styled from '@emotion/styled'

export const Frame = styled.div<{ $imageSrc: string }>`
  width: 100%;
  max-width: 164px;
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  background: url(${({ $imageSrc }) => JSON.stringify($imageSrc)}) lightgray 50% / cover no-repeat;
`
