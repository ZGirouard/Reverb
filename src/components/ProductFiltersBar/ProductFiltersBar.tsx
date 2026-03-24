import React from 'react'
import { FilterChip } from '../../styles/shared.styles'
import { Row } from './ProductFiltersBar.styles'

const FILTER_LABELS = [
  'All Filters',
  'New & Used',
  'Electric Guitars',
  'Brand',
  'Price',
  'Find a Deal',
  'Location',
] as const

export type ProductFiltersBarProps = {
  className?: string
}

export default function ProductFiltersBar({ className }: ProductFiltersBarProps) {
  return (
    <Row className={className}>
      {FILTER_LABELS.map((label) => (
        <FilterChip key={label}>{label}</FilterChip>
      ))}
    </Row>
  )
}
