import { FilterChip } from '../../styles/shared.styles'
import { Left, Right, Row, Subtitle, Title } from './ResultsSummaryRow.styles'

export type ResultsSummaryRowProps = {
  className?: string
}

export default function ResultsSummaryRow({ className }: ResultsSummaryRowProps) {
  return (
    <Row className={className}>
      <Left>
        <Title>191,543 Results</Title>
        <Subtitle>Including Reverb Bump</Subtitle>
      </Left>
      <Right>
        <FilterChip>Sort by: Most Recent First</FilterChip>
      </Right>
    </Row>
  )
}
