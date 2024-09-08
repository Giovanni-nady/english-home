import React from 'react'
import SettingsHeader from './settingsLayout/SettingsHeader'
import HeaderNavigator from '@/components/HeaderNavigator'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import { ScrollView, View } from 'react-native'
import SettingsBody from './settingsLayout/SettingsBody'

export default function SettingsScreen () {
  return (
    <SafeAreaViewLayout backgroundColor='onSecondary' statusContentStyle='light'>
      {/* settings title screen */}
      <ScrollView style={{padding: 12, flex:1}} showsVerticalScrollIndicator={false}>

      <HeaderNavigator title='setting.title' goBack={false} />

      {/* header -> name image email */}
      <SettingsHeader />

      {/* setting list */}
      <SettingsBody />
      </ScrollView>
    </SafeAreaViewLayout>
  )
}
