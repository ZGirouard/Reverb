import styled from '@emotion/styled'
import { space } from '../../styles/spacing'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: ${space[8]};
  margin-top: 0;
  margin-bottom: ${space[16]};
  overflow-x: auto;
`
