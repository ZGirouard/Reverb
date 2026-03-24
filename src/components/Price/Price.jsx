import { PriceParagraph } from './Price.styles'

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 */
export default function Price({ children, className, ...rest }) {
  return (
    <PriceParagraph className={className} {...rest}>
      {children}
    </PriceParagraph>
  )
}
