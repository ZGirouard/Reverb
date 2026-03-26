import React, { type ComponentProps } from 'react'
import { Button } from './FavoriteButton.styles'

const heartSrc = '/heart.svg'

export type FavoriteButtonProps = Omit<ComponentProps<typeof Button>, 'type'> & {
  type?: 'button' | 'submit' | 'reset'
}

export default function FavoriteButton({ type = 'button', ...rest }: FavoriteButtonProps) {
  return (
    <Button type={type} {...rest}>
      <img src={heartSrc} alt="" />
    </Button>
  )
}
