import styled from '@emotion/styled'
import { HomeSection, HomeSectionTitle } from '../../styles/shared.styles'
import { space } from '../../styles/spacing'

export const Section = HomeSection
export const Title = HomeSectionTitle

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: ${space[8]};
`
