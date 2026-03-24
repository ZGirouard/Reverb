import styled from '@emotion/styled'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  margin-top: 0;
  margin-bottom: 16px;
  overflow-x: auto;
`

export const Chip = styled.span`
  flex-shrink: 0;
  border-radius: 6px;
  background: #ededed;
  color: #000;
  font-family: Inter, system-ui, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 8px 10px;
  white-space: nowrap;
  user-select: none;
`
