import type { OptionalClassNameProps } from '../../types/emotionWrappers'
import { QualityParagraph } from './Quality.styles'

type QualityProps = OptionalClassNameProps<typeof QualityParagraph>

export default function Quality({ children, className, ...rest }: QualityProps) {
  return (
    <QualityParagraph className={className} {...rest}>
      {children}
    </QualityParagraph>
  )
}
