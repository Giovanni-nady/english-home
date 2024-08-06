import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../TextComponent'
import { HelloWave } from '../HelloWave'

interface AppTextProps {
  title: string
  subTitle: string
}

const AuthTitle: React.FC<AppTextProps> = ({ title = '', subTitle = '' }) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4
        }}
      >
        <TextComponent
          fontFamily='Roboto-Bold-700'
          size='headlineMedium'
          color='dark'
        >
          {title}
        </TextComponent>
        <HelloWave />
      </View>
      <TextComponent
        fontFamily='Roboto-Regular-400'
        size='titleMedium'
        color='secondaryText'
      >
        {subTitle}
      </TextComponent>
    </>
  )
}

export default AuthTitle
