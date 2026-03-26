import React from 'react'
import { space } from '../../styles/spacing'
import {
  Column,
  EmailField,
  FooterLink,
  LinkItem,
  LinkList,
  NewsletterDisclaimer,
  Section,
  SectionTitle,
  SubscribeBar,
  SubscribeBarDivider,
  SubscribeButton,
} from './Footer.top.styles'

const NEWSLETTER_DISCLAIMER = `By clicking Subscribe, I agree to receive exclusive offers & promotions, news & reviews, and personalized tips for buying and selling on Reverb.`

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
    <nav>
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
      <nav>
        <Section>
          <SectionTitle>Sell on Reverb</SectionTitle>
          {links(['Seller Hub', 'Reverb Payments FAQ'])}
        </Section>
      </nav>
      <nav>
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
    <nav>
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
    <nav>
      <Section>
        <SectionTitle>Company</SectionTitle>
        {links(['About Reverb', 'Careers', 'Press', 'Reverb Gives', 'Trust & Safety'])}
      </Section>
    </nav>
  )
}

export function FooterTopNavColumn5() {
  return (
    <section>
      <Section style={{ marginLeft: `-${space[32]}` }}>
        <SectionTitle>Get the Best of Reverb in Your
        Inbox</SectionTitle>
        <SubscribeBar>
          <EmailField type="email" name="footer-email" placeholder="Your Email" autoComplete="email" />
          <SubscribeBarDivider aria-hidden />
          <SubscribeButton type="button">Subscribe</SubscribeButton>
        </SubscribeBar>
        <NewsletterDisclaimer>{NEWSLETTER_DISCLAIMER}</NewsletterDisclaimer>
      </Section>
    </section>
  )
}

export function defaultFooterTopSlots(): React.ReactNode[] {
  return [
    <FooterTopNavColumn1 key="c1" />,
    <FooterTopNavColumn2 key="c2" />,
    <FooterTopNavColumn3 key="c3" />,
    <FooterTopNavColumn4 key="c4" />,
    <FooterTopNavColumn5 key="c5" />,
  ]
}
