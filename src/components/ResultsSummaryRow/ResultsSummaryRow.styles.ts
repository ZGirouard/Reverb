import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { FONT_FAMILY } from '../../styles/tokens'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  margin-top: 0;
  margin-bottom: 12px;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  min-width: 0;
`

export const Title = styled.p`
  margin: 0;
  color: ${colors.black};
  font-family: ${FONT_FAMILY};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Subtitle = styled.p`
  margin: 0;
  color: ${colors.neutral500};
  font-family: ${FONT_FAMILY};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Right = styled.div`
  flex-shrink: 0;
`
