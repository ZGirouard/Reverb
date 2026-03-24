import React from 'react'
import { Chip, Row } from './ProductFiltersBar.styles'

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
        <Chip key={label}>{label}</Chip>
      ))}
    </Row>
  )
}
