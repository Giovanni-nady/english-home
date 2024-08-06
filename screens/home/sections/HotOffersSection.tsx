import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Headlines from '@/components/HeadLines'
import { DataItem, nearbyList } from '@/constants/Data'
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet'
import { Image } from 'expo-image'
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated'
import { useTranslation } from 'react-i18next'

export default function HotOffersSection ({
  theme,
  delay = 200,
  extraSpace = false
}: {
  theme: any
  delay?: number
  extraSpace?: boolean
}) {
  const { i18n } = useTranslation()
  const renderItem = ({ item, index }: { item: DataItem; index: number }) => {
    const delay = 400 + index * 100

    return (
      <Animated.View
        style={{ flex: 1, margin: 12 }}
        entering={
          i18n.resolvedLanguage === 'en'
            ? FadeInRight.delay(delay).duration(1000).springify()
            : FadeInRight.delay(delay).duration(1000).springify()
        }
      >
        <View
          style={{
            width: SCREEN_WIDTH * 0.7,
            height: 'auto',
            flexDirection: 'row'
          }}
        >
          <Image
            source={{ uri: item.icon.url }}
            style={{
              width: '100%',
              height: 300,
              borderRadius: 50
            }}
            contentFit='cover'
          />
        </View>
      </Animated.View>
    )
  }

  const itemSeparatorComponent = () => {
    return (
      <View
        style={{
          height: '100%',
          width: 5,
          backgroundColor: 'red'
        }}
      />
    )
  }

  return (
    <View
      style={{
        flexGrow: 1,
        paddingBottom: extraSpace ? 14 : 0
      }}
    >
      <Animated.View
        entering={FadeInDown.delay(delay).duration(1000).springify()}
      >
        <View style={{ paddingTop: 10, paddingHorizontal: 4 }}>
          <Headlines
            text='home.discover.hotOffers'
            navigationKey='HotOffers'
            isViewAll
          />
        </View>
      </Animated.View>

      <FlatList
        horizontal
        // pagingEnabled={true}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={nearbyList}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        style={{ width: SCREEN_WIDTH * 0.9 }}
      />
    </View>
  )
}
