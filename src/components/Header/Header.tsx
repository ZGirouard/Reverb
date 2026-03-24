import React from 'react'
import IconLabelHeader from '../IconLabelHeader/IconLabelHeader'
import SearchBox from '../SearchBox/SearchBox'
import { Bar, Logo, SellGearButton } from './Header.styles'

const logoSrc = '/reverbLogo.png'

export type HeaderProps = {
  className?: string
  searchPlaceholder?: string
}

export default function Header({
  className,
  searchPlaceholder = 'Search gear, brands, and more',
}: HeaderProps) {
  return (
    <Bar className={className}>
      <Logo src={logoSrc} alt="Reverb" />
      <SearchBox placeholder={searchPlaceholder} />
      <SellGearButton type="button">Sell your gear</SellGearButton>
      <IconLabelHeader variant="favorites" />
      <IconLabelHeader variant="cart" />
      <IconLabelHeader variant="notifications" />
      <IconLabelHeader variant="menu" />
    </Bar>
  )
}
