import styled from '@emotion/styled'
import { FONT_FAMILY } from '../../styles/tokens'

export const Section = styled.section`
  margin-top: 8px;
  margin-bottom: 24px;
`

export const Title = styled.h2`
  margin: 0 0 16px;
  color: #000;
  font-family: ${FONT_FAMILY};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;
`

export const Card = styled.article`
  box-sizing: border-box;
  width: 135px;
  height: 210px;
  border-radius: 12px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0 6px 12px;
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
  color: #2f2f2f;
  font-family: ${FONT_FAMILY};
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`
