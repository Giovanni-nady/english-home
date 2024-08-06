import { ScrollView, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from 'react-native-paper'
import HomeHeader from './HomeHeader'
import HomeSearchBar from './HomeSearchBar'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import DiscoverSlider from './DiscoverSlider'
import HotOffersSection from './sections/HotOffersSection'
import NearbySalonSection from './sections/NearbySalonSection'
import TopRatedSection from './sections/TopRatedSection'
import CategoriesSection from './sections/CategoriesSection'
import AllSections from './sections/AllSections'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  FadeInDown
} from 'react-native-reanimated'

type ComponentMap = {
  recommendations: JSX.Element
  nearbySalons: JSX.Element
  hotOffers: JSX.Element
  topRated: JSX.Element
}


export default function HomeScreen () {
  const theme = useTheme()
const [activeCategory, setActiveCategory] = useState<
  'recommendations' | 'nearbySalons' | 'hotOffers' | 'topRated'
>('recommendations')

  const animatedValue = useSharedValue(0)

  useEffect(() => {
    animatedValue.value = withSpring(1, { damping: 2, stiffness: 100 })
  }, [activeCategory])

  const COMPONENTS_MAP: ComponentMap = {
    recommendations: <AllSections theme={theme} />,
    nearbySalons: <NearbySalonSection theme={theme} delay={200} extraSpace={true} />,
    hotOffers: <HotOffersSection theme={theme} delay={200} extraSpace={true}/>,
    topRated: <TopRatedSection theme={theme} delay={200} />
  }

  const renderComponent = () => {
    return COMPONENTS_MAP[activeCategory] || null
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: animatedValue.value,
      transform: [
        {
          translateY: animatedValue.value * 20
        }
      ]
    }
  }, [animatedValue.value])

  return (
    <SafeAreaViewLayout backgroundColor='background' statusContentStyle='dark'>
      <HomeHeader theme={theme} />
      <HomeSearchBar theme={theme} />
      <View
        style={{
          marginVertical: -60,
          padding: 35,
          paddingHorizontal: 20,
          backgroundColor: theme.colors.background,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50
        }}
      >
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignContent: 'center' }}
        >
          {/* recommendation slider */}
          <DiscoverSlider theme={theme} setActiveCategory={setActiveCategory} />

          {/* selected section */}
          <Animated.View style={animatedStyles}>
            {renderComponent()}
          </Animated.View>
          {/* nearby salons */}
          {/* <NearbySalonSection theme={theme} /> */}
        </ScrollView>
      </View>
    </SafeAreaViewLayout>
  )
}
