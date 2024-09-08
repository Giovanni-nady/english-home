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

export const grammarExamples: string[] = [
  'I read the newspaper every morning.',
  'She plays the piano beautifully.',
  'The Earth revolves around the Sun.',
  'They work at the same company.',
  'The train leaves at 6 PM every day.',
  'Water boils at 100 degrees Celsius.'
]

export const TodayExamples: string[] = [
  '- Hi',
  '- Hello everyone',
  '- My name is …',
  '- I am 25 years old',
  '- I am from Saudi Arabia',
  '- The capital, Riyadh',
  '- I study English everyday',
  '- I love sports and reading and camping',
  '- When I am free time, I like to watch movies',
  '- Thank you'
]
