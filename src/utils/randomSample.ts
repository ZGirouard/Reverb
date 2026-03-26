import { shuffle } from './shuffle'

export function sampleRandom<T>(items: T[], count: number): T[] {
  return shuffle(items).slice(0, Math.min(count, items.length))
}
