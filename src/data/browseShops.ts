export type BrowseShop = {
  id: string
  imageSrc: string
  title: string
  metaLine: string
  reviewCount: number
}

export const browseShops: BrowseShop[] = [
  {
    id: 'b1',
    imageSrc: '/fender.png',
    title: 'GearNuts',
    metaLine: 'Columbia City, IN, United States',
    reviewCount: 117_638,
  },
  {
    id: 'b2',
    imageSrc: '/fender.png',
    title: 'ProAudioStar',
    metaLine: 'Columbia City, IN, United States',
    reviewCount: 180_261,
  },
  {
    id: 'b3',
    imageSrc: '/fender.png',
    title: "Dave's Guitar Shop",
    metaLine: 'La Crosse, WI, United States',
    reviewCount: 25_134,
  },
  {
    id: 'b4',
    imageSrc: '/fender.png',
    title: 'GearTree',
    metaLine: 'Grandville, MI, United States',
    reviewCount: 94_267,
  },
  {
    id: 'b5',
    imageSrc: '/fender.png',
    title: 'Willcutt Guitars',
    metaLine: 'Lexington, KY, United States',
    reviewCount: 4_291,
  },
]
