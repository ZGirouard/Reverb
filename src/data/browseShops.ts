export type BrowseShop = {
  id: string
  imageSrc: string
  imageAlt: string
  title: string
  metaLine: string
  reviewCount: number
}

export const browseShops: BrowseShop[] = [
  {
    id: 'b1',
    imageSrc: '/fender.png',
    imageAlt: 'GearNuts shop',
    title: 'GearNuts',
    metaLine: 'Columbia City, IN, United States',
    reviewCount: 117_638,
  },
  {
    id: 'b2',
    imageSrc: '/fender.png',
    imageAlt: 'ProAudioStar shop',
    title: 'ProAudioStar',
    metaLine: 'Columbia City, IN, United States',
    reviewCount: 180_261,
  },
  {
    id: 'b3',
    imageSrc: '/fender.png',
    imageAlt: "Dave's Guitar Shop",
    title: "Dave's Guitar Shop",
    metaLine: 'La Crosse, WI, United States',
    reviewCount: 25_134,
  },
  {
    id: 'b4',
    imageSrc: '/fender.png',
    imageAlt: 'GearTree shop',
    title: 'GearTree',
    metaLine: 'Grandville, MI, United States',
    reviewCount: 94_267,
  },
  {
    id: 'b5',
    imageSrc: '/fender.png',
    imageAlt: 'Willcutt Guitars shop',
    title: 'Willcutt Guitars',
    metaLine: 'Lexington, KY, United States',
    reviewCount: 4_291,
  },
]
