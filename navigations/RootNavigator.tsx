import React, { useEffect, useState } from 'react'
import OnBoardingScreen from './../screens/onboarding/OnBoardingScreen'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { getAuthToken, getItem } from '@storage'
import { LayoutChangeEvent, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuth } from '@/context/AuthContext'

interface AppProps {
  onLayout: (event: LayoutChangeEvent) => void
}

type RootStackParamList = {
  OnBoarding: undefined
  Auth: undefined
  App: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator: React.FC<AppProps> = ({ onLayout }) => {
  const [showOnBoarding, setShowOnBoarding] = useState<boolean | null>(null)
  const { isAuthenticated, setIsAuthenticated } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const theme = useTheme()

  useEffect(() => {
    const initialize = async () => {
      await checkIfAlreadyOnboarding()
      await checkAuthToken()
      setIsLoading(false)
    }

    initialize()
  }, [])

  const checkIfAlreadyOnboarding = async () => {
    let onboarding = await getItem('onboarding')
    if (onboarding == '1') {
      console.log('hide')
      //hide onboarding
      setShowOnBoarding(false)
    } else {
      console.log('show')
      //show onBoarding
      setShowOnBoarding(true)
    }
  }

  const checkAuthToken = async () => {
    let token = await getAuthToken()
    const storedUserData = await getItem('userData')

    setIsAuthenticated(!!token && !!storedUserData)
  }

  if (isLoading || showOnBoarding === null || isAuthenticated === null) {
    return null
  }

  return (
    <View
      onLayout={onLayout}
      style={{ flex: 1, backgroundColor: theme.colors.background }}
    >
      <Stack.Navigator
        initialRouteName={
          showOnBoarding ? 'OnBoarding' : isAuthenticated ? 'App' : 'Auth'
        }
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
        <Stack.Screen name='Auth' component={AuthStack} />
        <Stack.Screen name='App' component={AppStack} />
      </Stack.Navigator>
    </View>
  )
}

export default RootNavigator
