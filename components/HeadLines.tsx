import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import TextComponent from './TextComponent'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'

export default function Headlines ({
  text,
  isViewAll = false,
  navigationKey
}: {
  text: string
  isViewAll?: boolean
  navigationKey: string
}) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const { t } = useTranslation()

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <TextComponent
        color='dark'
        fontFamily='Roboto-Medium-500'
        size='titleMedium'
      >
        {t(text)}
      </TextComponent>
      {isViewAll && (
        <TouchableOpacity
          onPress={() => {
            navigation.push(navigationKey)
          }}
        >
          <Text>{t('home.viewAll')}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
