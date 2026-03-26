import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { space } from '../../styles/spacing'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'

export const Section = styled.section`
  margin-top: ${space[8]};
  margin-bottom: ${space[24]};
`

export const Title = styled.h2`
  margin: 0 0 ${space[16]};
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.titleSm};
  font-style: normal;
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.normal};
  text-align: left;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${space[16]};
  align-items: flex-start;
  justify-content: center;
`

export const Card = styled.article`
  box-sizing: border-box;
  width: 135px;
  height: 210px;
  border-radius: 12px;
  background: ${colors.surfaceMuted};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0 ${space[6]} ${space[12]};
`

export const ImageWrap = styled.div`
  flex: 1 1 0;
  width: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const CategoryImage = styled.img`
  width: 168px;
  height: 168px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  display: block;
  flex-shrink: 0;
`

export const Label = styled.span`
  display: block;
  width: 100%;
  margin: 0;
  color: ${colors.neutral780};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.bodyXL};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
  text-align: center;
`
