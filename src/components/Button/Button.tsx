import { type ComponentProps } from 'react'
import { Root } from './Button.styles'

export type ButtonProps = ComponentProps<typeof Root>

export default function Button({ type = 'button', children, ...rest }: ButtonProps) {
  return (
    <Root type={type} {...rest}>
      {children}
    </Root>
  )
}
