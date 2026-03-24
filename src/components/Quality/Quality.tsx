import React, { type ComponentProps } from 'react'
import { QualityParagraph } from './Quality.styles'

type QualityProps = ComponentProps<typeof QualityParagraph>

export default function Quality({ children, className, ...rest }: QualityProps) {
  return (
    <QualityParagraph className={className} {...rest}>
      {children}
    </QualityParagraph>
  )
}
