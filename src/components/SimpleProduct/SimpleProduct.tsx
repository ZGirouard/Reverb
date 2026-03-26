import { type ReactNode } from 'react'
import { Caption, CaptionText, ImageArea, Root } from './SimpleProduct.styles'

export type SimpleProductProps = {
  imageSrc: string
  imageAlt?: string
  caption: ReactNode
  className?: string
}

export default function SimpleProduct({ imageSrc, imageAlt, caption, className }: SimpleProductProps) {
  return (
    <Root className={className}>
      <ImageArea $imageSrc={imageSrc} />
      <Caption>
        {typeof caption === 'string' ? <CaptionText>{caption}</CaptionText> : caption}
      </Caption>
    </Root>
  )
}
