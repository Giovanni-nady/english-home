import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import SwitchSelector from 'react-native-switch-selector'
// import i18n from '@/shared/locales'
import { getLocales } from 'expo-localization'
import { useTranslation } from 'react-i18next'

export default function HomeScreen() {
  
  const { t ,i18n} = useTranslation()

  const options = [
    {
      label: '01:00',
      value: '1',
      testID: 'switch-one',
      accessibilityLabel: 'switch-one'
    },
    {
      label: '01:30',
      value: '1.5',
      testID: 'switch-one-thirty',
      accessibilityLabel: 'switch-one-thirty'
    },
    {
      label: '02:00',
      value: '2',
      testID: 'switch-two',
      accessibilityLabel: 'switch-two'
    }
  ]

  const toggleLanguage = () => {
    // console.log(i18n.locale)
    // const newLocale = i18n.locale === 'en' ? 'ar' : 'en' // Toggle between English and Arabic for demonstration
    // i18n.locale = newLocale // Set the new locale in i18n-js
    // console.log(i18n.locale)
  }

  return (
    <SafeAreaView>
      <Text>{t('welcome')} HomeScreen</Text>
      <SwitchSelector
        options={options}
        initial={0}
        onPress={(value: any) =>
          console.log(`Call onPress with value: ${value}`)
        }
      />
      <Button title='Toggle Language' onPress={() => { 
        i18n.changeLanguage(i18n.language === 'ar'? 'en':'ar')
      }} />
    </SafeAreaView>
  )
}
