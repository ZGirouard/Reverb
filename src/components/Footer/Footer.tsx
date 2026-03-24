import React, { type ReactNode } from 'react'
import { defaultFooterTopSlots } from './FooterTopNav'
import {
  BottomSlot,
  FooterBottom,
  FooterTop,
  Root,
  TopSlot,
} from './Footer.styles'

function padTopSlots(nodes: ReactNode[] | undefined): ReactNode[] {
  const list = [...(nodes ?? [])]
  while (list.length < 5) list.push(null)
  return list.slice(0, 5)
}

function padBottomSlots(nodes: ReactNode[] | undefined): ReactNode[] {
  const list = [...(nodes ?? [])]
  while (list.length < 3) list.push(null)
  return list.slice(0, 3)
}

export type FooterProps = {
  topSlots?: ReactNode[]
  bottomSlots?: ReactNode[]
  className?: string
}

export default function Footer({ topSlots, bottomSlots, className }: FooterProps) {
  const top = padTopSlots(topSlots !== undefined ? topSlots : defaultFooterTopSlots())
  const bottom = padBottomSlots(bottomSlots)

  return (
    <Root className={className}>
      <FooterTop>
        {top.map((child, i) => (
          <TopSlot key={i}>{child}</TopSlot>
        ))}
      </FooterTop>
      <FooterBottom>
        {bottom.map((child, i) => (
          <BottomSlot key={i}>{child}</BottomSlot>
        ))}
      </FooterBottom>
    </Root>
  )
}

export { FooterBottom, FooterTop, BottomSlot, TopSlot }
