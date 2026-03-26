import styled from '@emotion/styled'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import { colors } from '../../styles/colors'
import { coverImageBackground } from '../../styles/cssUtils'
import { space } from '../../styles/spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'

const CARD_W = 308

export const Root = styled.article`
  box-sizing: border-box;
  width: ${CARD_W}px;
  max-width: 100%;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 10px 10px 14px 14px;
`

export const Header = styled.div`
  box-sizing: border-box;
  width: 304px;
  max-width: 100%;
  height: 59px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px 10px 0 0;
  background: ${colors.surfaceMuted};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${space[8]};
  padding: ${space[8]} ${space[8]} ${space[8]} ${space[12]};
`

export const HeaderMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${space[8]};
  min-width: 0;
`

export const SearchIcon = styled.img`
  width: 13px;
  height: 13px;
  display: block;
  flex-shrink: 0;
  margin-top: ${space[1]};
  object-fit: contain;
`

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${space[2]};
  min-width: 0;
`

export const Title = styled.h3`
  margin: 0;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.body};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
`

export const Subtitle = styled.p`
  margin: 0;
  color: ${colors.neutral800};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.label};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
`

export const HeaderFavorite = styled(FavoriteButton)`
  position: static;
  flex-shrink: 0;
`

export const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const ThumbDivider = styled.div`
  flex: 0 0 ${space[2]};
  width: ${space[2]};
  height: 153px;
  background: ${colors.white};
`

export const ThumbLeft = styled.div<{ $imageSrc: string }>`
  flex: 0 0 153px;
  width: 153px;
  height: 153px;
  aspect-ratio: 1 / 1;
  border-radius: 0 0 0 14px;
  background: ${({ $imageSrc }) => coverImageBackground($imageSrc)};
`

export const ThumbRight = styled.div<{ $imageSrc: string }>`
  flex: 0 0 153px;
  width: 153px;
  height: 153px;
  aspect-ratio: 1 / 1;
  border-radius: 0 0 14px 0;
  background: ${({ $imageSrc }) => coverImageBackground($imageSrc)};
`
