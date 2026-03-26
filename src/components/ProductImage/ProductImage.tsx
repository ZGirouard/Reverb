import { type ComponentProps } from 'react'
import { Frame } from './ProductImage.styles'

type FrameProps = ComponentProps<typeof Frame>

export type ProductImageProps = Omit<FrameProps, '$imageSrc'> & {
  src: string
}

export default function ProductImage({ src, className, ...rest }: ProductImageProps) {
  return (
    <Frame $imageSrc={src} className={className} {...rest} />
  )
}
