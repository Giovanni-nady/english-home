import { View } from 'react-native'
import React from 'react'
import NearbySalonSection from './NearbySalonSection'
import HotOffersSection from './HotOffersSection'
import TopRatedSection from './TopRatedSection'
import CategoriesSection from './CategoriesSection'

export default function AllSections ({ theme }: { theme: any }) {
  return (
    <View style={{ flexGrow: 1 }}>
      <CategoriesSection theme={theme} />
      <NearbySalonSection theme={theme} delay={300} />
      <HotOffersSection theme={theme} delay={400} />
      <TopRatedSection theme={theme} delay={500} />
    </View>
  )
}
