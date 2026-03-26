import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { space } from '../../styles/spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'
import { Root as BaseButton } from '../Button/Button.styles'

export const BottomAppColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space[12]};
`

export const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${space[12]};
`

export const SocialIconLink = styled.a`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  color: ${colors.white};
  text-decoration: none;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    opacity: 0.85;
  }
`

export const DownloadAppButton = styled(BaseButton)`
  width: auto;
  max-width: none;
  padding: 0 ${space[14]};
  border: 1px solid ${colors.white};
  background: transparent;
  color: ${colors.white};

  &:hover {
    background: ${colors.whiteAlpha06};
  }
`

export const BottomFirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${space[12]};
`

export const LocalePill = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 248px;
  height: 34px;
  border-radius: 32px;
  border: 1px solid ${colors.white};
  background: ${colors.transparentNeutral};
  overflow: hidden;
`

export const LocaleSegment = styled.button`
  box-sizing: border-box;
  flex: 1;
  min-width: 0;
  height: 100%;
  margin: 0;
  padding: 0 ${space[6]};
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${colors.white};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.caption};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const LocaleDivider = styled.span`
  flex-shrink: 0;
  width: 1px;
  height: 32px;
  background: ${colors.white};
`
