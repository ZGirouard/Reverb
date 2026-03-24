import styled from '@emotion/styled'
import { Root as BaseButton } from '../Button/Button.styles'

export const BottomAppColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

export const SocialIconLink = styled.a`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  color: #fff;
  text-decoration: none;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    opacity: 0.85;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
    border-radius: 2px;
  }
`

export const DownloadAppButton = styled(BaseButton)`
  width: auto;
  max-width: none;
  padding: 0 14px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`

export const BottomFirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`

export const LocalePill = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 248px;
  height: 34px;
  border-radius: 32px;
  border: 1px solid #fff;
  background: rgba(217, 217, 217, 0);
  overflow: hidden;
`

export const LocaleSegment = styled.button`
  box-sizing: border-box;
  flex: 1;
  min-width: 0;
  height: 100%;
  margin: 0;
  padding: 0 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #fff;
  font-family: Inter, system-ui, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: -2px;
  }
`

export const LocaleDivider = styled.span`
  flex-shrink: 0;
  width: 1px;
  height: 32px;
  background: #fff;
`
