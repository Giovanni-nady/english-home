import {
  View,
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

export default function PersonalDetailsScreen () {
  const theme = useTheme()
  const { userData } = useAuth()
  const { t } = useTranslation()

  return (
    <SafeAreaViewLayout backgroundColor='lightBackground'>
      <HeaderNavigator title='setting.personal-details' />
      <View
        style={{
          //   marginVertical: -10,
          // padding: 35,
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
              justifyContent: 'space-between',
              paddingBottom: 80
            }}
            keyboardShouldPersistTaps='handled'
            showsVerticalScrollIndicator={false}
          >
            <UserForm
              initialValues={{
                first_name: userData.applicant.first_name,
                last_name: userData.applicant.last_name,
                address: userData.applicant.address,
                governorate_id: userData.applicant.governorate_id,
                email: userData.applicant.email,
                phone: userData.applicant.phone,
                password: '',
                confirmPassword: '',
                avatar: userData.applicant.avatar
              }}
              mode='edit'
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaViewLayout>
  )
}
