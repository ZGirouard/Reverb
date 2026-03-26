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
  onFavoriteClick?: () => void
}

export default function RecentSearchCard({
  searchTitle,
  itemCount,
  leftImageSrc,
  rightImageSrc,
  onFavoriteClick,
}: RecentSearchCardProps) {
  return (
    <Root>
      <Header>
        <HeaderMain>
          <SearchIcon src={searchIconSrc} width={13} height={13} />
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
        <ThumbDivider />
        <ThumbRight $imageSrc={rightImageSrc} />
      </ImageRow>
    </Root>
  )
}
