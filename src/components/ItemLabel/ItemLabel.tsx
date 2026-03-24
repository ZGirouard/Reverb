import React from 'react'
import type { OptionalClassNameProps } from '../../types/emotionWrappers'
import { ItemLabelParagraph } from './ItemLabel.styles'

type ItemLabelProps = OptionalClassNameProps<typeof ItemLabelParagraph>

export default function ItemLabel({ children, className, ...rest }: ItemLabelProps) {
  return (
    <ItemLabelParagraph className={className} {...rest}>
      {children}
    </ItemLabelParagraph>
  )
}
