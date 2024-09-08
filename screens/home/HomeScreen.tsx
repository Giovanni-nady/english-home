import { ScrollView, Text, View } from 'react-native'
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
import TextComponent from '@/components/TextComponent'
import { useTranslation } from 'react-i18next'

type ComponentMap = {
  recommendations: JSX.Element
  nearbySalons: JSX.Element
  hotOffers: JSX.Element
  topRated: JSX.Element
}

export default function HomeScreen () {
  const theme = useTheme()
  const { t, i18n } = useTranslation()
  console.log(i18n.dir())

  const [activeCategory, setActiveCategory] = useState<
    'recommendations' | 'nearbySalons' | 'hotOffers' | 'topRated'
  >('recommendations')

  const animatedValue = useSharedValue(0)

  useEffect(() => {
    animatedValue.value = withSpring(1, { damping: 2, stiffness: 100 })
  }, [activeCategory])

  const COMPONENTS_MAP: ComponentMap = {
    recommendations: <AllSections theme={theme} />,
    nearbySalons: (
      <NearbySalonSection theme={theme} delay={200} extraSpace={true} />
    ),
    hotOffers: <HotOffersSection theme={theme} delay={200} extraSpace={true} />,
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
    <SafeAreaViewLayout backgroundColor='onSecondary' statusContentStyle='light'>
      {/* <HomeHeader theme={theme} /> */}
      <View style={{ padding: 12, flexDirection: 'column', gap: 22 }}>
        <View style={{ padding: 8 }}>
          <TextComponent
            fontFamily='Roboto-Bold-700'
            size='titleLarge'
            color='textPrimaryColor'
          >
            {t('home.reads')}
          </TextComponent>

          {/* percentage */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <TextComponent
              fontFamily='Roboto-Medium-500'
              size='titleLarge'
              color='textPrimaryColor'
            >
              {t('home.sub-reads')}
            </TextComponent>
            <View
              style={{
                backgroundColor: '#331D2C',
                width: 80,
                height: 80,
                borderRadius: 100
              }}
            ></View>
          </View>
        </View>
        {/* reading card */}
        <View>
          <TextComponent
            style={{ paddingStart: 6,paddingBottom:8 }}
            align={i18n.dir() === 'rtl' ? 'right' : 'left'}
            fontFamily='Roboto-Bold-700'
            size='titleLarge'
            color='textPrimaryColor'
          >
            {t('home.read')}
          </TextComponent>
          <View
            style={{
              width: '100%',
              padding: 18,
              borderRadius: 12,
              backgroundColor: 'white',
              shadowColor: '#00000040',
              shadowOffset: {
                width: 0,
                height: 6
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,

              elevation: 12
            }}
          >
            <TextComponent
              fontFamily='Roboto-Medium-500'
              size='titleLarge'
              style={{ lineHeight: 32 }}
              align={i18n.dir() === 'rtl' ? 'right' : 'left'}
              color='textPrimaryColor'
            >
              My childhood was full of wonderful memories and adventures. I grew
              up in a small town, surrounded by nature and friendly neighbors.
              Every day was a new opportunity for discovery and learning. Let me
              take you on a journey through some of my favorite childhood
              stories
            </TextComponent>
          </View>
        </View>
      </View>

      {/* <HomeSearchBar theme={theme} /> */}
      {/* <View
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
          recommendation slider
          <DiscoverSlider theme={theme} setActiveCategory={setActiveCategory} />

          selected section
          <Animated.View style={animatedStyles}>
            {renderComponent()}
          </Animated.View>
        </ScrollView>
      </View> */}
    </SafeAreaViewLayout>
  )
}
