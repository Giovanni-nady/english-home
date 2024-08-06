import React, { useState } from 'react'
import { Image } from 'expo-image'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { categories, DataItem, nearbyList } from '@/constants/Data'
import TextComponent from '@textComponent'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather, FontAwesome } from '@expo/vector-icons'
import Headlines from '@/components/HeadLines'
import Animated, { FadeInDown } from 'react-native-reanimated'

export default function TopRatedSection ({
  theme,
  delay = 200
}: {
  theme: any
  delay?: number
}) {
  const [isFavorite, setIsFavorite] = useState(false)

  const renderItem = ({ item, index }: { item: DataItem; index: number }) => {
    if (index > 2) return null

    const delay = 400 + index * 100

    return (
      <Animated.View
        style={{ flex: 1, margin: 8 }}
        entering={FadeInDown.delay(delay).duration(1000).springify()}
      >
        <View
          key={index}
          style={{
            position: 'relative',
            width: '100%',
            height: 300,
            borderRadius: 50,
            overflow: 'hidden'
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
              {/* <StarRating
    disabled={true}
    starSize={15}
    containerStyle={{ width: 90 }}
    maxStars={5}
    rating={game.stars}
    emptyStar={require('./../../assets/images/emptyStar.png')}
    fullStar={require('./../../assets/images/fullStar.png')}
  /> */}
              <TextComponent
                color='onSecondary'
                size='titleLarge'
                fontFamily='Roboto-Bold-700'
              >
                {item.name}
              </TextComponent>
              {/* <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
            >
              <Feather name='download' size={18} color='lightgray' />
              <TextComponent color='onSecondary' fontFamily='Roboto-Bold-700'>
                {item.name}
                Downloads
              </TextComponent>
            </View> */}
            </View>
          </LinearGradient>
        </View>
      </Animated.View>
    )
  }

  return (
    <View style={{ flexGrow: 1 }}>
      <Animated.View
        entering={FadeInDown.delay(delay).duration(1000).springify()}
      >
        <View style={{ paddingTop: 10, paddingHorizontal: 4 }}>
          <Headlines text='home.discover.topRated' navigationKey='TopRated' isViewAll />
        </View>
      </Animated.View>
      {/* <Animated.View
        entering={FadeInDown.delay(400).duration(1000).springify()}
      > */}
      <FlatList
        contentContainerStyle={{
          marginTop: 8,
          flexGrow: 1,
          marginBottom: 350
        }}
        data={nearbyList}
        numColumns={2}
        // horizontal={true}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
      {/* </Animated.View> */}
    </View>
  )
}
