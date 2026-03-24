import React from 'react'
import HeaderText from '../HeaderText/HeaderText'
import { HeaderTextLink } from '../HeaderText/HeaderText.styles'
import IconLabelHeader from '../IconLabelHeader/IconLabelHeader'
import SearchBox from '../SearchBox/SearchBox'
import { Divider, Logo, NavRow, Root, SellGearButton, TopRow } from './Header.styles'

const logoSrc = '/reverbLogo.png'

const NAV_LABELS = [
  'The Reverb Outlet',
  'Guitars',
  'Pedals and Amplifiers',
  'Keyboards & Synths',
  'View All',
  'Brands',
  'News',
  'Explore',
  'Artists Shops',
  'Reverb Gives',
  'Help Center',
] as const

export type HeaderProps = {
  className?: string
  searchPlaceholder?: string
}

export default function Header({
  className,
  searchPlaceholder = 'Search gear, brands, and more',
}: HeaderProps) {
  return (
    <Root className={className}>
      <TopRow>
        <Logo src={logoSrc} alt="Reverb" />
        <SearchBox placeholder={searchPlaceholder} />
        <SellGearButton type="button">Sell your gear</SellGearButton>
        <IconLabelHeader variant="favorites" />
        <IconLabelHeader variant="cart" />
        <IconLabelHeader variant="notifications" />
        <IconLabelHeader variant="menu" />
      </TopRow>
      <Divider aria-hidden />
      <NavRow aria-label="Primary">
        {NAV_LABELS.map((label) =>
          label === 'Guitars' ? (
            <HeaderTextLink key={label} to="/products">
              {label}
            </HeaderTextLink>
          ) : (
            <HeaderText key={label}>{label}</HeaderText>
          ),
        )}
      </NavRow>
      <Divider aria-hidden />
    </Root>
  )
}
