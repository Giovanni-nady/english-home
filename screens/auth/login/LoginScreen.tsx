import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'
import React from 'react'
import LoginForm from '@/components/forms/auth/LoginForm'
import { useTranslation } from 'react-i18next'
import AuthTitle from '@/components/auth/AuthTitle'
import LogoSection from '@/components/auth/LogoSection'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import { useTheme } from 'react-native-paper'

export default function LoginScreen () {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <SafeAreaViewLayout backgroundColor='onBackground' statusContentStyle='light'>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
            paddingBottom: 60
          }}
          keyboardShouldPersistTaps='handled'
        >
          <LogoSection
            logoHeight='30%'
            bgColor={'primary'}
            text={t('login.button')}
          />

          <View style={[styles.formSection, { backgroundColor: theme.colors.onSecondary }]}>
            <View style={{ width: '90 %', paddingTop: 26 }}>
              {/* title and subtitle */}
              <AuthTitle
                title={t('title')}
                subTitle={t('login.subTitle')}
              />

              {/* login form */}
              <LoginForm />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaViewLayout>
  )
}

const styles = StyleSheet.create({
  formSection: {
    height: '100%',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
