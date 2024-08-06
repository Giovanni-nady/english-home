import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import GradientButton from '@/components/GradientButton'
import TextComponent from '@textComponent'
import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from 'react-i18next'

const discoverKeys = [
  'recommendations',
  'nearbySalons',
  'hotOffers',
  'topRated'
]

export default function DiscoverSlider ({
  theme,
  setActiveCategory
}: {
  theme: any
  setActiveCategory?: (category: string) => void
}) {
  const [activeCategory, setActiveCategoryState] =
    React.useState<string>('recommendations')
  const { t } = useTranslation()

  const handleCategoryPress = (category: string) => {
    setActiveCategoryState(category)
    setActiveCategory(category)
  }

  return (
    <View style={{ paddingStart: 8 }}>
      <ScrollView
        horizontal
        // scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      >
        {discoverKeys.map(key => {
          const category = t(`home.discover.${key}`)

          if (key === activeCategory) {
            return (
              <GradientButton
                key={key}
                containerClass={{ marginEnd: 6 }}
                value={category}
              />
            )
          } else {
            return (
              <TouchableOpacity
                onPress={() => handleCategoryPress(key)}
                key={key}
                style={{
                  marginEnd: 6
                }}
              >
                <LinearGradient
                  colors={[
                    theme.colors.primary,
                    theme.colors.secondaryBackground
                  ]}
                  start={{ x: 0.1, y: 0.2 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    padding: 1,
                    borderRadius: 100
                  }}
                >
                  <View
                    style={{
                      borderRadius: 100,
                      backgroundColor: theme.colors.onSecondary,
                      padding: 8,
                      paddingHorizontal: 12
                    }}
                  >
                    <TextComponent
                      color={'primary'}
                      fontFamily='Roboto-Regular-400'
                    >
                      {category}
                    </TextComponent>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            )
          }
        })}
      </ScrollView>
    </View>
  )
}
