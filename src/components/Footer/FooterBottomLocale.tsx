import React from 'react'
import { FooterLegalLine } from './Footer.top.styles'
import { BottomFirstColumn, LocaleDivider, LocalePill, LocaleSegment } from './Footer.bottom.styles'

export default function FooterBottomLocale() {
  return (
    <BottomFirstColumn>
      <LocalePill>
        <LocaleSegment type="button">Continental U.S.</LocaleSegment>
        <LocaleDivider aria-hidden />
        <LocaleSegment type="button">English</LocaleSegment>
        <LocaleDivider aria-hidden />
        <LocaleSegment type="button">$USD</LocaleSegment>
      </LocalePill>
      <FooterLegalLine>
        2026 Reverb.com LLC Terms & Policies Privacy Policy
      </FooterLegalLine>
    </BottomFirstColumn>
  )
}
