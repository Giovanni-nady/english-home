import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  useColorScheme
} from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import TextComponent from '@textComponent'
import { StatusBar } from 'react-native'
import SignUpForm from '@/components/forms/auth/SignUpForm'

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 10
  : 0
export default function SignUpScreen () {
  const theme = useTheme()
  const colorScheme = useColorScheme()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
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
          <View style={styles.logoSection}>
            <Image
              source={require('./../../../assets/images/icon.png')}
              style={{ width: '100%', height: '65%' }}
              resizeMode='contain'
            />
            <TextComponent
              size='titleMedium'
              fontFamily='Roboto-Medium-500'
              color='dark'
            >
              Register
            </TextComponent>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingTop: 16
              }}
            >
              <View
                style={{
                  width: '85%',
                  borderWidth: 0.5,
                  borderColor:
                    colorScheme === 'dark' ? theme.colors.primary : '#E5E5E3'
                }}
              />
            </View>
          </View>

          <View style={styles.formSection}>
            <View style={{ width: '85%', paddingTop: 26 }}>
              <TextComponent
                fontFamily='Roboto-Bold-700'
                size='headlineMedium'
                color='dark'
              >
                Hello, Welcome &#128075;
              </TextComponent>
              <TextComponent
                fontFamily='Roboto-Regular-400'
                size='titleMedium'
                color='secondaryText'
              >
                First, let’s create your account
              </TextComponent>
              <SignUpForm />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
