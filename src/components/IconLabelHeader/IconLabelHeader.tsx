import { IconWrap, Label, Root } from './IconLabelHeader.styles'

export const ICON_LABEL_HEADER_VARIANTS = {
  cart: {
    label: 'Cart',
    iconSrc: '/cart.svg',
  },
  menu: {
    label: 'Menu',
    iconSrc: '/menu.svg',
  },
  notifications: {
    label: 'Notifications',
    iconSrc: '/bell.svg',
  },
  favorites: {
    label: 'Favorites',
    iconSrc: '/heart.svg',
  },
} as const

export type IconLabelHeaderVariant = keyof typeof ICON_LABEL_HEADER_VARIANTS

export type IconLabelHeaderProps = {
  variant: IconLabelHeaderVariant
  className?: string
}

export default function IconLabelHeader({ variant, className }: IconLabelHeaderProps) {
  const config = ICON_LABEL_HEADER_VARIANTS[variant]
  if (!config) return null

  const { label, iconSrc } = config

  return (
    <Root className={className}>
      <IconWrap>
        <img src={iconSrc}/>
      </IconWrap>
      <Label>{label}</Label>
    </Root>
  )
}
