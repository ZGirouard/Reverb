import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { space } from '../../styles/spacing'
import { FONT_FAMILY } from '../../styles/tokens'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: ${space[12]};
  width: 100%;
  margin-top: 0;
  margin-bottom: ${space[12]};
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${space[4]};
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
