import { PriceParagraph } from './Price.styles'

export default function Price({ children, className, ...rest }) {
  return (
    <PriceParagraph className={className} {...rest}>
      {children}
    </PriceParagraph>
  )
}
