export const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export interface DataItem {
  name: string
  icon: { url: string }
}

export const categories: DataItem[] = [
  { name: 'Home', icon: { url: 'https://picsum.photos/seed/picsum/100' } },
  { name: 'Work', icon: { url: 'https://picsum.photos/seed/work/100' } },
  { name: 'Gym', icon: { url: 'https://picsum.photos/seed/gym/100' } },
  { name: 'Shop', icon: { url: 'https://picsum.photos/seed/shop/100' } },
  { name: 'Park', icon: { url: 'https://picsum.photos/seed/park/100' } },
  { name: 'Cafe', icon: { url: 'https://picsum.photos/seed/cafe/100' } },
  {
    name: 'Library',
    icon: { url: 'https://picsum.photos/seed/library/100' }
  },
  {
    name: 'Hospital',
    icon: { url: 'https://picsum.photos/seed/hospital/100' }
  }
]
export const nearbyList: DataItem[] = [
  {
    name: 'Library',
    icon: { url: 'https://picsum.photos/seed/library/600' }
  },
  {
    name: 'Hospital',
    icon: { url: 'https://picsum.photos/seed/hospital/600' }
  },
  { name: 'Cafe', icon: { url: 'https://picsum.photos/seed/cafe/600' } },
  { name: 'Park', icon: { url: 'https://picsum.photos/seed/park/600' } },
  { name: 'Gym', icon: { url: 'https://picsum.photos/seed/gym/600' } },
  { name: 'Work', icon: { url: 'https://picsum.photos/seed/work/600' } }
]


export const grammarKeywords: string[] = [
  'Always',
  'Usually',
  'Often',
  'Sometimes',
  'Never',
  'At night',
  'Now',
  'At The Moment',
  'Today'
]
