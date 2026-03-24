import { IconContainer, IconWrap, Label, root } from './IconLabel.styles'

const truckIconSrc = '/truckIcon.svg'

const VARIANTS = {
  freeShipping: {
    label: 'Free shipping',
    iconSrc: truckIconSrc,
    iconAlt: '',
  },
  returnPolicy: {
    label: '14-Day Return Policy',
    iconSrc: truckIconSrc,
    iconAlt: '',
  },
}

export default function IconLabel({ variant, className }) {
  const config = VARIANTS[variant]
  if (!config) return null

  const { label, iconSrc, iconAlt } = config

  return (
    <span css={root} className={className}>
      <IconContainer>
        <IconWrap>
          <img src={iconSrc} alt={iconAlt} />
        </IconWrap>
      </IconContainer>
      <Label>{label}</Label>
    </span>
  )
}

export { VARIANTS }
