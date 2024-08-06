import React from 'react'
import SettingsHeader from './settingsLayout/SettingsHeader'
import HeaderNavigator from '@/components/HeaderNavigator'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import SettingsList from './settingsLayout/SettingsList'

export default function SettingsScreen () {
  return (
    <SafeAreaViewLayout backgroundColor='lightBackground'>
      {/* settings title screen */}
      <HeaderNavigator title='setting.title' goBack={false} />

      {/* header -> name image email */}
      <SettingsHeader />

      {/* setting list */}
      <SettingsList />
    </SafeAreaViewLayout>
  )
}
