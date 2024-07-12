import React, { useEffect, useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import OnBoardingScreen from './../screens/onboarding/OnBoardingScreen'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { getAuthToken, getItem, removeItem, setItem } from '@storage' // Import your storage utility to get the onboarding flag
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
    // debugger
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

    // const checkAuthStatus = async () => {
    //   // Add your logic to check if the user is authenticated
    //   // Example: const user = await getUser();
    //   // setIsAuthenticated(!!user);
    // };

    const initialize = async () => {
      // await removeItem('onboarding')
      await checkIfAlreadyOnboarding()
      // await checkAuthStatus();
      setIsLoading(false)
    }

    initialize()
  }, [])

  const checkAuthToken = async () => {
    let token = await getAuthToken()
    setIsAuthenticated(!!token)
  }

  if (showOnBoarding === null || isAuthenticated === null) {
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
