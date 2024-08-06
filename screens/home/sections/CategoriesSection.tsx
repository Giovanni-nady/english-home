import React from 'react'
import { Image } from 'expo-image'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { categories, DataItem } from '@/constants/Data'
import TextComponent from '@textComponent'
import Headlines from '@/components/HeadLines'
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated'
import { useTranslation } from 'react-i18next'

export default function CategoriesSection ({ theme }: { theme: any }) {
  const { i18n } = useTranslation()

  const renderItem = ({ item, index }: { item: DataItem; index: number }) => {
    if (index > 3) return null
    const delay = 200 + index * 100

    return (
      <Animated.View
        style={{ flex: 1, margin: 4 }}
        entering={
          i18n.resolvedLanguage === 'en'
            ? FadeInRight.delay(delay).duration(1000).springify()
            : FadeInRight.delay(delay).duration(1000).springify()
        }
      >
        <TouchableOpacity
          //   onPress={() => navigation.push('BusinessList', { category: item.name })}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10
          }}
        >
          <View
            style={{
              borderRadius: 100,
              padding: 8,
              borderWidth: 1,
              borderColor: theme.colors.primary,
              backgroundColor: theme.colors.background
              // backgroundColor: 'red'
            }}
          >
            <Image
              source={{ uri: item.icon.url }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 100
              }}
            />
          </View>
          <View>
            <TextComponent
            //   style={{ fontFamily: 'outfit', marginTop: 2, textAlign: 'center' }}
            >
              {item.name}
            </TextComponent>
          </View>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  return (
    <>
      <Animated.View
        entering={FadeInDown.delay(100).duration(1000).springify()}
      >
        <View style={{ paddingTop: 8, paddingHorizontal: 4 }}>
          <Headlines
            text='home.categories'
            navigationKey='Categories'
            isViewAll
          />
        </View>
      </Animated.View>
      <FlatList
        // contentContainerStyle={{ marginTop: 4 }}
        scrollEnabled={false}
        data={categories}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </>
  )
}
