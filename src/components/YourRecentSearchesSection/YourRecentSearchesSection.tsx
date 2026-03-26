import RecentSearchCard from '../RecentSearchCard/RecentSearchCard'
import { Columns, Section, Title } from './YourRecentSearchesSection.styles'

const ENTRIES = [
  {
    key: 'recent-1',
    searchTitle: 'Semi-hollow electric',
    itemCount: 126,
    leftImageSrc: '/Guitars/Guitar6.png',
    rightImageSrc: '/Guitars/Guitar7.png',
  },
  {
    key: 'recent-2',
    searchTitle: 'Player series offset',
    itemCount: 54,
    leftImageSrc: '/Guitars/Guitar11.png',
    rightImageSrc: '/Guitars/Guitar18.png',
  },
  {
    key: 'recent-3',
    searchTitle: 'Analog synths & keys',
    itemCount: 203,
    leftImageSrc: '/Guitars/Guitar14.png',
    rightImageSrc: '/Guitars/Guitar16.png',
  },
] as const

export default function YourRecentSearchesSection() {
  return (
    <Section>
      <Title id="your-recent-searches-heading">Your Recent Searches</Title>
      <Columns>
        {ENTRIES.map((entry) => (
          <RecentSearchCard
            key={entry.key}
            searchTitle={entry.searchTitle}
            itemCount={entry.itemCount}
            leftImageSrc={entry.leftImageSrc}
            rightImageSrc={entry.rightImageSrc}
          />
        ))}
      </Columns>
    </Section>
  )
}
