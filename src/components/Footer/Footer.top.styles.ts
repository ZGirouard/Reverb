import styled from '@emotion/styled'

export const Column = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 0;
  height: 100%;
  overflow-y: auto;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
`

export const SectionTitle = styled.h3`
  margin: 0;
  color: #fff;
  font-family: Inter, system-ui, sans-serif;
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
  gap: 8px;
`

export const LinkItem = styled.li`
  margin: 0;
`

export const FooterLink = styled.a`
  margin: 0;
  color: #828282;
  font-family: Inter, system-ui, sans-serif;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;

  &:hover {
    color: #fff;
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
  background: #fff;
  overflow: hidden;
`

export const EmailField = styled.input`
  box-sizing: border-box;
  flex: 1;
  min-width: 0;
  height: 100%;
  margin: 0;
  padding: 0 8px;
  border: none;
  background: transparent;
  outline: none;
  color: #000;
  font-family: Inter, system-ui, sans-serif;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &::placeholder {
    color: #8e8e8e;
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
  background: #a6a6a6;
`

export const SubscribeButton = styled.button`
  box-sizing: border-box;
  flex-shrink: 0;
  margin: 0;
  padding: 0 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #000;
  font-family: Inter, system-ui, sans-serif;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: -2px;
  }
`

export const NewsletterDisclaimer = styled.p`
  margin: 0;
  max-width: 220px;
  color: #8e8e8e;
  font-family: Inter, system-ui, sans-serif;
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
