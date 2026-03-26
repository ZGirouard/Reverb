import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/colors'
import { FONT_FAMILY, fontSize, fontWeight, lineHeight } from '../../styles/tokens'

const navLabelText = `
  margin: 0;
  color: ${colors.neutral600};
  font-family: ${FONT_FAMILY};
  font-size: ${fontSize.micro};
  font-style: normal;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.normal};
`

export const HeaderTextParagraph = styled.p`
  ${navLabelText}
`

export const HeaderTextLink = styled(Link)`
  ${navLabelText}
  text-decoration: none;
`
