import { FooterBottomBlurb, Section, SectionTitle } from './Footer.top.styles'

const COPY = `Your purchases help youth music programs get the gear they need to
make music.`

export function FooterBottomReverbGives() {
  return (
    <Section>
      <SectionTitle>Reverb Gives</SectionTitle>
      <FooterBottomBlurb>{COPY}</FooterBottomBlurb>
    </Section>
  )
}
