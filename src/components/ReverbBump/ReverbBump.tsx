import type { OptionalClassNameProps } from '../../types/emotionWrappers'
import { ReverbBumpParagraph } from './ReverbBump.styles'

type ReverbBumpProps = OptionalClassNameProps<typeof ReverbBumpParagraph>

export default function ReverbBump({ children, className, ...rest }: ReverbBumpProps) {
  return (
    <ReverbBumpParagraph className={className} {...rest}>
      {children}
    </ReverbBumpParagraph>
  )
}
