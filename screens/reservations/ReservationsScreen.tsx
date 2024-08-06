import { View, Text, Platform } from 'react-native'
import React from 'react'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import HeaderNavigator from '@/components/HeaderNavigator'
import { useTheme } from 'react-native-paper'

export default function ReservationsScreen () {
  const theme = useTheme()
  return (
    <SafeAreaViewLayout backgroundColor='lightBackground'>
      <HeaderNavigator title='reservation.title' goBack={false} />
      <View
        style={{
          marginVertical: 0,
          padding: 25,
          paddingHorizontal: 20,
          backgroundColor: theme.colors.background,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          flexGrow: 1
        }}
      >
        <Text>ReservationsScreen</Text>
      </View>
    </SafeAreaViewLayout>
  )
}
