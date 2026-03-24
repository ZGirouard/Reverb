import styled from '@emotion/styled'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const PageCircle = styled.button`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #d9d9d9;
  color: #000;
  font-family: Inter, system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`

export const EllipsisCircle = styled.span`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #d9d9d9;
  color: #000;
  font-family: Inter, system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  flex-shrink: 0;
  user-select: none;
`

export const NextPill = styled.button`
  box-sizing: border-box;
  height: 30px;
  padding: 0 14px;
  border: none;
  border-radius: 18px;
  background: #d9d9d9;
  color: #000;
  font-family: Inter, system-ui, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`
