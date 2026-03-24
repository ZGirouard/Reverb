import styled from '@emotion/styled'

export const Column = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 0;
  height: 100%;
  overflow-y: auto;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
`

export const SectionTitle = styled.h3`
  margin: 0;
  color: #fff;
  font-family: Inter, system-ui, sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const LinkItem = styled.li`
  margin: 0;
`

export const FooterLink = styled.a`
  margin: 0;
  color: #828282;
  font-family: Inter, system-ui, sans-serif;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`
