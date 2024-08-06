import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderNavigator from '@/components/HeaderNavigator'
import { useTheme } from 'react-native-paper'
import { useAuth } from '@/context/AuthContext'
import { useTranslation } from 'react-i18next'
import UserForm from '@/components/forms/auth/UserForm'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import ChangePasswordForm from '@/components/forms/ChangePasswordForm'

export default function ChangePasswordScreen () {
  const theme = useTheme()
  const { userData } = useAuth()
  const { t } = useTranslation()

  return (
    <SafeAreaViewLayout backgroundColor='lightBackground'>
      <HeaderNavigator title='setting.change-password' />
      <View
        style={{
          paddingTop: 10,
          paddingHorizontal: 20,
          backgroundColor: theme.colors.background,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          flexGrow: 1,
          height: Platform.OS === 'ios' ? '90%' : 'auto'
        }}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
        >
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-between'
              // paddingBottom: 80
            }}
            keyboardShouldPersistTaps='handled'
            showsVerticalScrollIndicator={false}
          >
            <ChangePasswordForm />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaViewLayout>
  )
}
