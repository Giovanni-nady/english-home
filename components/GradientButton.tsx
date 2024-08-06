import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import TextComponent from './TextComponent'
import { useTheme } from 'react-native-paper'

export default function GradientButton (props: any) {
  const theme = useTheme()
  return (
    <>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.secondaryBackground]}
        start={{ x: 0.1, y: 0.2 }}
        end={{ x: 1, y: 1 }}
        style={{
            //   borderWidth: 2,
            padding:1,
          borderRadius: 100,
          flexDirection: 'row',
          alignItems: 'center',
          ...props?.containerClass
        }}
      >
        <TouchableOpacity style={{ padding: 8, paddingHorizontal: 12 }}>
          <TextComponent color={'white'} fontFamily='Roboto-Regular-400'>
            {props.value}
          </TextComponent>
        </TouchableOpacity>
      </LinearGradient>
    </>
  )
}
