import React, { type ComponentProps } from 'react'
import { HeaderTextParagraph } from './HeaderText.styles'

type HeaderTextProps = ComponentProps<typeof HeaderTextParagraph>

export default function HeaderText({ children, className, ...rest }: HeaderTextProps) {
  return (
    <HeaderTextParagraph className={className} {...rest}>
      {children}
    </HeaderTextParagraph>
  )
}
