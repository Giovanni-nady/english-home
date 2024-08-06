import {
  View,
  Text,
  Image,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  StatusBar,
  useColorScheme,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native'
import React, { useState } from 'react'
import { useTheme } from 'react-native-paper'
import TextComponent from '@textComponent'
import { useTranslation } from 'react-i18next'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import LogoSection from '@/components/auth/LogoSection'

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 10
  : 0

export default function ForgetPasswordScreen () {
  const theme = useTheme()
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const colorScheme = useColorScheme()
  const { t } = useTranslation()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
          paddingBottom: 60
        }}
        keyboardShouldPersistTaps='handled'
      >
        <LogoSection
          logoHeight='25%'
          bgColor={'primary'}
          text={t('forgetPassword.otp')}
        />

        <View style={styles.formSection}>
          <View style={{ width: '85%', paddingTop: 26 }}>
            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='headlineMedium'
              color='dark'
            >
              {t('forgetPassword.title')}
            </TextComponent>
            <View style={{ marginTop: 10 }}>
              <TextComponent
                fontFamily='Roboto-Regular-400'
                size='titleMedium'
                color='secondaryText'
              >
                {t('forgetPassword.subTitle')}
              </TextComponent>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6
                }}
              >
                <TextComponent
                  color='secondaryText'
                  align='center'
                  fontFamily='Roboto-Regular-400'
                  size='titleMedium'
                >
                  {t('forgetPassword.noCode')}
                </TextComponent>
                <TouchableOpacity
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                  onPress={() => {
                    Alert.alert('Request new OTP')
                    //   navigation.navigate('SignUp')
                  }}
                >
                  <TextComponent
                    align='center'
                    fontFamily='Roboto-Regular-400'
                    size='titleMedium'
                  >
                    {t('forgetPassword.resend')}
                  </TextComponent>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logoSection: {
    height: '25%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 12
  },
  formSection: {
    height: '75%',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
