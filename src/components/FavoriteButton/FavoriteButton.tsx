import React, { type ComponentProps } from 'react'
import { Button } from './FavoriteButton.styles'

const heartSrc = '/heart.svg'

export type FavoriteButtonProps = Omit<ComponentProps<typeof Button>, 'type'> & {
  type?: 'button' | 'submit' | 'reset'
}

export default function FavoriteButton({
  type = 'button',
  'aria-label': ariaLabel = 'Add to favorites',
  ...rest
}: FavoriteButtonProps) {
  return (
    <Button type={type} aria-label={ariaLabel} {...rest}>
      <img src={heartSrc} alt="" />
    </Button>
  )
}
