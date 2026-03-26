import { type ComponentProps } from 'react'
import { Frame } from './ProductImage.styles'

type FrameProps = ComponentProps<typeof Frame>

export type ProductImageProps = Omit<FrameProps, '$imageSrc'> & {
  src: string
  alt?: string
}

export default function ProductImage({ src, alt, className, ...rest }: ProductImageProps) {
  return (
    <Frame $imageSrc={src} className={className} {...rest} />
  )
}
