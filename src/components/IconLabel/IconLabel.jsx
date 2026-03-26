import { IconContainer, IconWrap, Label, root } from './IconLabel.styles'

const truckIconSrc = '/truckIcon.svg'

const VARIANTS = {
  freeShipping: {
    label: 'Free shipping',
    iconSrc: truckIconSrc,
  },
  returnPolicy: {
    label: '14-Day Return Policy',
    iconSrc: truckIconSrc,
  },
}

export default function IconLabel({ variant, className }) {
  const config = VARIANTS[variant]
  if (!config) return null

  const { label, iconSrc } = config

  return (
    <span css={root} className={className}>
      <IconContainer>
        <IconWrap>
          <img src={iconSrc}/>
        </IconWrap>
      </IconContainer>
      <Label>{label}</Label>
    </span>
  )
}

export { VARIANTS }
