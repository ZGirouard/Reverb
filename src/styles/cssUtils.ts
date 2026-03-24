import { colors } from './colors'

export function coverImageBackground(imageSrc: string): string {
  return `url(${JSON.stringify(imageSrc)}) ${colors.imagePlaceholder} 50% / cover no-repeat`
}
