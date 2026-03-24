import React from 'react'
import {
  Column,
  FooterLink,
  LinkItem,
  LinkList,
  Section,
  SectionTitle,
} from './Footer.top.styles'

function links(items: string[]) {
  return (
    <LinkList>
      {items.map((label) => (
        <LinkItem key={label}>
          <FooterLink href="#">{label}</FooterLink>
        </LinkItem>
      ))}
    </LinkList>
  )
}

export function FooterTopNavColumn1() {
  return (
    <nav aria-label="Shop gear">
      <Section>
        <SectionTitle>Shop Gear</SectionTitle>
        {links([
          'Categories',
          'Brands',
          'Shops',
          'Deals and Steals',
          'Price Drops',
          '0% Financing',
          'New and Popular',
        ])}
      </Section>
    </nav>
  )
}

export function FooterTopNavColumn2() {
  return (
    <Column>
      <nav aria-label="Sell on Reverb">
        <Section>
          <SectionTitle>Sell on Reverb</SectionTitle>
          {links(['Seller Hub', 'Reverb Payments FAQ'])}
        </Section>
      </nav>
      <nav aria-label="Resources">
        <Section>
          <SectionTitle>Resources</SectionTitle>
          {links(['Reverb News', 'Price Guide', 'Buying Guide', 'Gift Cards'])}
        </Section>
      </nav>
    </Column>
  )
}

export function FooterTopNavColumn3() {
  return (
    <nav aria-label="Help and tools">
      <Section>
        <SectionTitle>Help & Tools</SectionTitle>
        {links([
          'Help Center',
          'Contact Support',
          'Reverb Protection',
          'Mobile Apps',
          'Integrations & API',
          'Affiliate Program',
          'Accessibility',
          'Cookie Settings',
        ])}
      </Section>
    </nav>
  )
}

export function FooterTopNavColumn4() {
  return (
    <nav aria-label="Company">
      <Section>
        <SectionTitle>Company</SectionTitle>
        {links(['About Reverb', 'Careers', 'Press', 'Reverb Gives', 'Trust & Safety'])}
      </Section>
    </nav>
  )
}

/** Default top row: four link columns + one empty slot */
export function defaultFooterTopSlots(): React.ReactNode[] {
  return [
    <FooterTopNavColumn1 key="c1" />,
    <FooterTopNavColumn2 key="c2" />,
    <FooterTopNavColumn3 key="c3" />,
    <FooterTopNavColumn4 key="c4" />,
    null,
  ]
}
