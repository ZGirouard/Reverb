import React from 'react'
import { Chip } from '../ProductFiltersBar/ProductFiltersBar.styles'
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
        <Chip>Sort by: Most Recent First</Chip>
      </Right>
    </Row>
  )
}
