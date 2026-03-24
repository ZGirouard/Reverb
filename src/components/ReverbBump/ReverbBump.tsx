import React, { type ComponentProps } from 'react'
import { ReverbBumpParagraph } from './ReverbBump.styles'

type ReverbBumpProps = ComponentProps<typeof ReverbBumpParagraph>

export default function ReverbBump({ children, className, ...rest }: ReverbBumpProps) {
  return (
    <ReverbBumpParagraph className={className} {...rest}>
      {children}
    </ReverbBumpParagraph>
  )
}
