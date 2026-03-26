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
}

export default function RecentSearchCard({
  searchTitle,
  itemCount,
  leftImageSrc,
  rightImageSrc,
  leftImageAlt,
  rightImageAlt,
  onFavoriteClick,
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
        <HeaderFavorite onClick={onFavoriteClick} />
      </Header>
      <ImageRow>
        <ThumbLeft $imageSrc={leftImageSrc} />
        <ThumbDivider aria-hidden />
        <ThumbRight $imageSrc={rightImageSrc} />
      </ImageRow>
    </Root>
  )
}
