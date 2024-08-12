import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import TextComponent from '@textComponent'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import AuthTitle from '@/components/auth/AuthTitle'
import LogoSection from '@/components/auth/LogoSection'
import UserForm from '@/components/forms/auth/UserForm'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import { useTheme } from 'react-native-paper'

export default function SignUpScreen () {
  const { t } = useTranslation()
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const theme = useTheme()
  
  return (
    <SafeAreaViewLayout backgroundColor='onBackground' statusContentStyle='light' translucent={true}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
            paddingBottom: 80
          }}
          keyboardShouldPersistTaps='handled'
        >
          <LogoSection
            logoHeight='15%'
            bgColor={'primary'}
            text={t('register.header')}
          />

          <View
            style={[
              styles.formSection,
              { backgroundColor: theme.colors.onSecondary }
            ]}
          >
            <View style={{ width: '90%', paddingTop: 26 }}>
              {/* title and subtitle */}
              <AuthTitle
                title={t('register.title')}
                subTitle={t('register.createAccount')}
              />

              {/* signUp form */}
              <UserForm
                initialValues={{
                  first_name: '',
                  last_name: '',
                  address: '',
                  governorate_id: '1',
                  email: '',
                  phone: '',
                  password: '',
                  confirmPassword: '',
                  avatar: ''
                }}
                mode='signUp'
              />

              {/* if you have account */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  paddingVertical: 12
                }}
              >
                <TextComponent
                  color='secondaryText'
                  align='center'
                  fontFamily='Roboto-Regular-400'
                  size='titleMedium'
                >
                  {t('register.alreadyHaveAccount')}
                </TextComponent>
                <TouchableOpacity
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                  onPress={() => {
                    navigation.navigate('Login')
                  }}
                >
                  <TextComponent
                    align='center'
                    fontFamily='Roboto-Regular-400'
                    size='titleMedium'
                  >
                    {t('register.login')}
                  </TextComponent>
                </TouchableOpacity>
              </View>
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
