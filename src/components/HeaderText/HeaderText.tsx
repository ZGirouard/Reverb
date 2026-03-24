import React from 'react'
import type { OptionalClassNameProps } from '../../types/emotionWrappers'
import { HeaderTextParagraph } from './HeaderText.styles'

type HeaderTextProps = OptionalClassNameProps<typeof HeaderTextParagraph>

export default function HeaderText({ children, className, ...rest }: HeaderTextProps) {
  return (
    <HeaderTextParagraph className={className} {...rest}>
      {children}
    </HeaderTextParagraph>
  )
}
