import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/tokens'

export const Section = styled.section`
  margin-top: 8px;
  margin-bottom: 24px;
`

export const Title = styled.h2`
  margin: 0 0 16px;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
`

export const QuadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 146px);
  grid-auto-rows: 146px;
  gap: 16px;
`

export const CenterSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`
