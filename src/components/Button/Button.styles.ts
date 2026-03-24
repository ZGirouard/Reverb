import styled from '@emotion/styled'

export const Root = styled.button`
  box-sizing: border-box;
  width: 155px;
  height: 32px;
  padding: 0 10px;
  margin: 0;
  border: 1px solid #000;
  border-radius: 23px;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #000;
  font-family: Inter, system-ui, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus-visible {
    outline: 2px solid #232323;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
