import {
  Header,
  HeaderFavorite,
  HeaderMain,
  HeaderText,
  ImageRow,
  Root,
  SearchIcon,
  Subtitle,
  ThumbDivider,
  ThumbLeft,
  ThumbRight,
  Title,
} from './RecentSearchCard.styles'

const searchIconSrc = '/search.svg'

export type RecentSearchCardProps = {
  searchTitle: string
  itemCount: number
  leftImageSrc: string
  rightImageSrc: string
  leftImageAlt?: string
  rightImageAlt?: string
  onFavoriteClick?: () => void
  favoriteAriaLabel?: string
}

export default function RecentSearchCard({
  searchTitle,
  itemCount,
  leftImageSrc,
  rightImageSrc,
  leftImageAlt,
  rightImageAlt,
  onFavoriteClick,
  favoriteAriaLabel,
}: RecentSearchCardProps) {
  return (
    <Root>
      <Header>
        <HeaderMain>
          <SearchIcon src={searchIconSrc} alt="" width={13} height={13} decoding="async" />
          <HeaderText>
            <Title>{searchTitle}</Title>
            <Subtitle>
              {itemCount} items
            </Subtitle>
          </HeaderText>
        </HeaderMain>
        <HeaderFavorite onClick={onFavoriteClick} aria-label={favoriteAriaLabel} />
      </Header>
      <ImageRow>
        <ThumbLeft
          $imageSrc={leftImageSrc}
          role={leftImageAlt != null && leftImageAlt !== '' ? 'img' : undefined}
          aria-label={leftImageAlt != null && leftImageAlt !== '' ? leftImageAlt : undefined}
        />
        <ThumbDivider aria-hidden />
        <ThumbRight
          $imageSrc={rightImageSrc}
          role={rightImageAlt != null && rightImageAlt !== '' ? 'img' : undefined}
          aria-label={rightImageAlt != null && rightImageAlt !== '' ? rightImageAlt : undefined}
        />
      </ImageRow>
    </Root>
  )
}
