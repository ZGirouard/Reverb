import styled from '@emotion/styled'
import { coverImageBackground } from '../../styles/cssUtils'

export const Frame = styled.div<{ $imageSrc: string }>`
  width: 100%;
  max-width: 164px;
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  background: ${({ $imageSrc }) => coverImageBackground($imageSrc)};
`
