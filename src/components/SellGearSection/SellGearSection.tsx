import {
  Inner,
  Left,
  SectionTitle,
  SignUpButton,
  Subtitle,
} from '../HomeHero/HomeHero.styles'
import {
  BenefitPanel,
  BenefitRow,
  BenefitSubtitle,
  BenefitText,
  BenefitTitle,
  Section,
  SearchIcon,
} from './SellGearSection.styles'

const searchIconSrc = '/search.svg'

const BENEFITS = [
  {
    title: 'Reach millions of buyers',
    subtitle: 'The largest marketplace dedicated to buying and\nselling music gear.',
  },
  {
    title: 'List easily with helpful tools',
    subtitle: "We'll help autofill product details, price your gear,\nand market your listing",
  },
  {
    title: 'Ship with peace of mind',
    subtitle: 'Protections to keep your sales and shipments\ncovered.',
  },
] as const

export default function SellGearSection() {
  return (
    <Section>
      <Inner style={{ alignItems: 'center' }}>
        <Left>
          <SectionTitle>{`Sell to fund your\nnext purchase`}</SectionTitle>
          <Subtitle>
            {`Give your gear a second, third,\nor fourth life`}
          </Subtitle>
          <SignUpButton type="button">Sell your gear</SignUpButton>
        </Left>
        <BenefitPanel>
          {BENEFITS.map((item) => (
            <BenefitRow key={item.title}>
              <SearchIcon src={searchIconSrc} width={36} height={36} />
              <BenefitText>
                <BenefitTitle>{item.title}</BenefitTitle>
                <BenefitSubtitle>{item.subtitle}</BenefitSubtitle>
              </BenefitText>
            </BenefitRow>
          ))}
        </BenefitPanel>
      </Inner>
    </Section>
  )
}
