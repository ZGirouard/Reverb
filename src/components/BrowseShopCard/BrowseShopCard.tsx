import React from 'react'
import ItemLabel from '../ItemLabel/ItemLabel'
import { ImageFrame, Meta, RatingRow, ReviewCount, Root, Stars } from './BrowseShopCard.styles'

export type BrowseShopCardProps = {
  imageSrc: string
  imageAlt?: string
  title: string
  metaLine: string
  reviewCount: number
  starCount?: number
  className?: string
}

function formatReviewCount(n: number) {
  return n.toLocaleString('en-US')
}

export default function BrowseShopCard({
  imageSrc,
  imageAlt,
  title,
  metaLine,
  reviewCount,
  starCount = 5,
  className,
}: BrowseShopCardProps) {
  const stars = Array.from({ length: starCount }, (_, i) => (
    <span key={i} aria-hidden>
      ★
    </span>
  ))

  return (
    <Root className={className}>
      <ImageFrame
        $imageSrc={imageSrc}
        role={imageAlt != null && imageAlt !== '' ? 'img' : undefined}
        aria-label={imageAlt != null && imageAlt !== '' ? imageAlt : undefined}
      />
      <ItemLabel>{title}</ItemLabel>
      <Meta>{metaLine}</Meta>
      <RatingRow>
        <Stars aria-label={`${starCount} out of 5 stars`}>{stars}</Stars>
        <ReviewCount>({formatReviewCount(reviewCount)})</ReviewCount>
      </RatingRow>
    </Root>
  )
}
