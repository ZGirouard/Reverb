import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { space } from '../../styles/spacing'
import { FONT_FAMILY } from '../../styles/tokens'

export const Column = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${space[24]};
  min-height: 0;
  height: 100%;
  overflow-y: auto;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${space[12]};
  margin: 0;
`

export const SectionTitle = styled.h3`
  margin: 0;
  color: ${colors.white};
  font-family: ${FONT_FAMILY};
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${space[8]};
`

export const LinkItem = styled.li`
  margin: 0;
`

export const FooterLink = styled.a`
  margin: 0;
  color: ${colors.neutral600};
  font-family: ${FONT_FAMILY};
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;

  &:hover {
    color: ${colors.white};
  }
`

export const SubscribeBar = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 160px;
  height: 30px;
  border-radius: 6px;
  background: ${colors.white};
  overflow: hidden;
`

export const EmailField = styled.input`
  box-sizing: border-box;
  flex: 1;
  min-width: 0;
  height: 100%;
  margin: 0;
  padding: 0 ${space[8]};
  border: none;
  background: transparent;
  outline: none;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &::placeholder {
    color: ${colors.neutral550};
    opacity: 1;
  }

  &:focus::placeholder {
    opacity: 0.65;
  }
`

export const SubscribeBarDivider = styled.span`
  flex-shrink: 0;
  align-self: stretch;
  width: 1px;
  background: ${colors.neutral400};
`

export const SubscribeButton = styled.button`
  box-sizing: border-box;
  flex-shrink: 0;
  margin: 0;
  padding: 0 ${space[10]};
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;

  &:focus-visible {
    outline: 2px solid ${colors.white};
    outline-offset: -${space[2]};
  }
`

export const NewsletterDisclaimer = styled.p`
  margin: 0;
  max-width: 220px;
  color: ${colors.neutral550};
  font-family: ${FONT_FAMILY};
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: pre-line;
`

export const FooterLegalLine = styled(NewsletterDisclaimer)`
  max-width: none;
  white-space: normal;
`

export const FooterBottomBlurb = styled(NewsletterDisclaimer)`
  max-width: none;
`
