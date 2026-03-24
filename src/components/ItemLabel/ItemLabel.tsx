import React, { type ComponentProps } from 'react'
import { ItemLabelParagraph } from './ItemLabel.styles'

type ItemLabelProps = ComponentProps<typeof ItemLabelParagraph>

export default function ItemLabel({ children, className, ...rest }: ItemLabelProps) {
  return (
    <ItemLabelParagraph className={className} {...rest}>
      {children}
    </ItemLabelParagraph>
  )
}
