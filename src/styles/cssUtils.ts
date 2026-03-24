export function coverImageBackground(imageSrc: string): string {
  return `url(${JSON.stringify(imageSrc)}) lightgray 50% / cover no-repeat`
}
