import React, { useState } from 'react'
import { Image } from 'expo-image'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { categories, DataItem, nearbyList } from '@/constants/Data'
import TextComponent from '@textComponent'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather, FontAwesome } from '@expo/vector-icons'
import Headlines from '@/components/HeadLines'
import Animated, { FadeInDown } from 'react-native-reanimated'

export default function NearbySalonSection ({
  theme,
  delay = 200,
  extraSpace = false
}: {
  theme: any
  delay: number
  extraSpace?: boolean
}) {
  const [isFavorite, setIsFavorite] = useState(false)

  const renderItem = ({ item, index }: { item: DataItem; index: number }) => {
    if (index > 2) return null

    const delay = 400 + index * 100
    const isLastItem = index === nearbyList.length - 1

    return (
      <Animated.View
        entering={FadeInDown.delay(delay).duration(1000).springify()}
      >
        <View key={index} style={{ position: 'relative' }}>
          <Image
            source={{ uri: item.icon.url }}
            style={{
              width: '100%',
              height: 300,
              borderRadius: 50
            }}
            contentFit='cover'
          />

          <LinearGradient
            colors={['rgba(0, 0, 0, 0.6)', 'transparent']}
            style={{
              position: 'absolute',
              padding: 22,
              height: '100%',
              width: '100%',
              borderRadius: 50,
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'baseline'
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.onSecondary,
                  borderRadius: 100,
                  width: 60,
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <TextComponent>Logo</TextComponent>
              </View>
              <TouchableOpacity
                style={{
                  padding: 8,
                  borderRadius: 100,
                  backgroundColor: 'rgba(255, 255, 255, 0.3)'
                }}
                onPress={() => {
                  setIsFavorite(!isFavorite)
                }}
              >
                <FontAwesome
                  name='heart'
                  size={25}
                  color={isFavorite ? 'red' : 'white'}
                />
              </TouchableOpacity>
            </View>

            <View style={{ marginVertical: 2 }}>
              <TextComponent
                color='onSecondary'
                size='titleLarge'
                fontFamily='Roboto-Bold-700'
              >
                {item.name}
              </TextComponent>
            </View>
          </LinearGradient>
        </View>
        {!isLastItem && <View style={{ marginVertical: 8 }} />}
      </Animated.View>
    )
  }

  return (
    <View style={{ marginBottom: extraSpace ? 300 : 0 }}>
      <Animated.View
        entering={FadeInDown.delay(delay).duration(1000).springify()}
      >
        <View style={{ paddingTop: 10, paddingHorizontal: 4 }}>
          <Headlines
            text='home.discover.nearbySalons'
            navigationKey={'NearbySalons'}
            isViewAll
          />
        </View>
      </Animated.View>
      {/* <Animated.View
        entering={FadeInDown.delay(400).duration(1000).springify()}
      > */}
      <FlatList
        contentContainerStyle={{
          marginTop: 8,
          flexGrow: 1
        }}
        data={nearbyList}
        // numColumns={4}
        scrollEnabled={false}
        // ItemSeparatorComponent={() => <View style={{ marginVertical: 8 }} />}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
      {/* </Animated.View> */}
    </View>
  )
}
