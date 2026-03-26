import { Card, CategoryImage, ImageWrap, Label, Row, Section, Title } from './BrowseByCategorySection.styles'

const CATEGORIES = [
  { label: 'Electric Guitars', imageSrc: '/ElectricGuitars.png' },
  { label: 'Bass Guitars', imageSrc: '/BassGuitars.png' },
  { label: 'Acoustic Guitars', imageSrc: '/AcousticGuitars.png' },
  { label: 'Amps', imageSrc: '/Amps.png' },
  { label: 'Effects and Pedals', imageSrc: '/Pedals.png' },
  { label: 'Accessories', imageSrc: '/Accessories.png' },
] as const

export default function BrowseByCategorySection() {
  return (
    <Section>
      <Title id="browse-by-category-heading">Browse by Category</Title>
      <Row>
        {CATEGORIES.map((item) => (
          <Card key={item.label}>
            <ImageWrap>
              <CategoryImage src={item.imageSrc} alt="" width={168} height={168} decoding="async" />
            </ImageWrap>
            <Label>{item.label}</Label>
          </Card>
        ))}
      </Row>
    </Section>
  )
}
