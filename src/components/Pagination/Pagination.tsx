import { EllipsisCircle, List, Nav, NextPill, PageCircle } from './Pagination.styles'

const DEFAULT_PAGE_NUMBERS = [1, 2, 3, 4, 5] as const

export type PaginationProps = {
  pageNumbers?: readonly number[]
  className?: string
}

export default function Pagination({ pageNumbers = DEFAULT_PAGE_NUMBERS, className }: PaginationProps) {
  return (
    <Nav className={className}>
      <List>
        {pageNumbers.map((n) => (
          <PageCircle key={n} type="button">
            {n}
          </PageCircle>
        ))}
        <EllipsisCircle>…</EllipsisCircle>
        <NextPill type="button">Next</NextPill>
      </List>
    </Nav>
  )
}
