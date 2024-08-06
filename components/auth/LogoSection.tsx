import { View, Platform, StyleSheet, useColorScheme } from 'react-native'
import React, { useTransition } from 'react'
import { Image } from 'expo-image'
import { StatusBar } from 'react-native'
import TextComponent from '@textComponent'
import { MD3Colors } from 'react-native-paper/lib/typescript/types'
import { useTheme } from 'react-native-paper'
import { useTranslation } from 'react-i18next'

interface AppTextProps {
  text: string
  bgColor: keyof MD3Colors | string
  logoHeight: any
}

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0

const LogoSection: React.FC<AppTextProps> = ({
  text = '',
  bgColor = 'primary',
  logoHeight = '40%'
}) => {
  const { t } = useTranslation()
  const theme = useTheme()
  return (
    <View
      style={[styles.logoSection, { backgroundColor: theme.colors.onBackground }]}
    >
      {/* <Image
        source={require('./../../assets/images/icon.png')}
        style={{ width: '100%', height: 140 }}
        contentFit='contain'
      /> */}
      <TextComponent
        fontFamily='Roboto-Bold-700'
        size='headlineMedium'
        color='white'
      >
        {t('title')}
      </TextComponent>
      <TextComponent
        style={{ marginTop: 4 }}
        fontFamily='Roboto-Regular-400'
        size='titleMedium'
        color='onSecondaryText'
      >
        {t('subTitle')}
      </TextComponent>

      <TextComponent
        style={{ marginTop: 28 }}
        size='headlineLarge'
        fontFamily='Roboto-Medium-500'
        color='white'
      >
        {t('appName')}
      </TextComponent>
    </View>
  )
}
const styles = StyleSheet.create({
  logoSection: {
    // height: "40%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 12,
    paddingBottom: Platform.OS === 'android' ? 28 : 12
  }
})

export default LogoSection
