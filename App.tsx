import {
  MD3LightTheme as DefaultTheme,
  PaperProvider
} from 'react-native-paper'
import { I18nManager, useColorScheme } from 'react-native'
import { useCallback, useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigations/RootNavigator'
import { AuthProvider } from './context/AuthContext'
import Toast from 'react-native-toast-message'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './shared/locales/i18n'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const queryClient = new QueryClient()
SplashScreen.preventAutoHideAsync()

export default function App () {
  const [fontsLoaded, fontError] = useFonts({
    'Roboto-Black-900': require('./assets/fonts/Poppins/Poppins-Black.ttf'),
    'Roboto-BlackItalic-900': require('./assets/fonts/Poppins/Poppins-BlackItalic.ttf'),
    'Roboto-Bold-700': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Roboto-BoldItalic-700': require('./assets/fonts/Poppins/Poppins-BoldItalic.ttf'),
    'Roboto-Italic': require('./assets/fonts/Poppins/Poppins-Italic.ttf'),
    'Roboto-Medium-500': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Roboto-MediumItalic-500': require('./assets/fonts/Poppins/Poppins-MediumItalic.ttf'),
    'Roboto-Regular-400': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Roboto-Light-300': require('./assets/fonts/Poppins/Poppins-Light.ttf'),
    'Roboto-LightItalic-300': require('./assets/fonts/Poppins/Poppins-LightItalic.ttf'),
    'Roboto-Thin-100': require('./assets/fonts/Poppins/Poppins-Thin.ttf'),
    'Roboto-ThinItalic-100': require('./assets/fonts/Poppins/Poppins-ThinItalic.ttf')
  })

  const lightColors = {
    colors: {
      gray: '#686D76',
      borderColor: '#A25DB6',
      light: '#fff',
      onMixed: '#B6A5CA',
      onMixedSecondary: '#5c4955',
      onMixedTernary: '#9f929a',
      primary: '#331D2C',
      textPrimary: '#EFE1D1',
      textPrimaryColor: '#331D2C',
      inputPrimary: '#331D2C',
      primaryBackground: '#331D2C',
      onPrimary: '#EFE1D1',
      primaryContainer: '#EFE1D1',
      onPrimaryContainer: 'rgb(51, 0, 68)',
      buttonDisabled: '#dfdfdf',
      textDisabled: '#afafaf',
      secondaryText: '#331D2CCC',
      onSecondaryText: '#F6F6F6',
      secondaryTextContainer: '#bcb7b7',
      onSecondaryTextContainer: '#686868',
      secondary: '#EFE1D1',
      onSecondary: '#EFE1D1',
      borderSecondaryColor: '#331D2C',
      secondaryContainer: 'rgb(237, 220, 255)',
      onSecondaryContainer: 'rgb(41, 0, 85)',
      tertiary: 'rgb(130, 82, 78)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(255, 218, 214)',
      onTertiaryContainer: 'rgb(51, 17, 15)',
      error: 'rgb(186, 26, 26)',
      onError: 'rgb(255, 255, 255)',
      errorContainer: 'rgb(255, 218, 214)',
      onErrorContainer: 'rgb(65, 0, 2)',
      background: '#F6F6F6',
      secondaryBackground: '#B6A5CA',
      lightBackground: '#D2C5E1',
      onBackground: '#331D2C',
      surface: 'rgb(255, 251, 255)',
      onSurface: 'rgb(30, 27, 30)',
      surfaceVariant: 'rgb(235, 223, 233)',
      onSurfaceVariant: 'rgb(76, 68, 76)',
      outline: 'rgb(126, 116, 125)',
      outlineVariant: 'rgb(207, 195, 205)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(51, 47, 51)',
      inverseOnSurface: 'rgb(247, 238, 243)',
      inversePrimary: 'rgb(240, 176, 255)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(249, 242, 250)',
        level2: 'rgb(245, 236, 247)',
        level3: 'rgb(242, 231, 244)',
        level4: 'rgb(240, 229, 243)',
        level5: 'rgb(238, 225, 241)'
      },
      surfaceDisabled: 'rgba(30, 27, 30, 0.12)',
      onSurfaceDisabled: 'rgba(30, 27, 30, 0.38)',
      backdrop: 'rgba(53, 46, 54, 0.4)',
      dark: '#161616',
      onDark: 'rgb(255, 255, 255)',
      darkContainer: 'rgb(151, 240, 255)',
      onDarkContainer: 'rgb(0, 31, 36)'
    }
  }

  const darkColors = {
    colors: {
      gray: '#96979a',
      light: '#091635',
      borderColor: 'rgb(81, 12, 103)',
      onMixed: '#797677',
      onMixedSecondary: '#494547',
      onMixedTernary: '#9f929a',
      primary: 'rgb(240, 176, 255)',
      textPrimary: '#1e1a1c',
      textPrimaryColor: '#331D2C',
      inputPrimary: '#f5f5f5',
      onPrimary: 'rgb(81, 12, 103)',
      primaryContainer: 'rgb(107, 41, 128)',
      onPrimaryContainer: 'rgb(251, 215, 255)',
      buttonDisabled: '#dfdfdf',
      textDisabled: '#afafaf',
      secondaryText: '#EFE1D1',
      onSecondaryText: '#EFE1D1',
      secondaryTextContainer: '#bcb7b7',
      onSecondaryTextContainer: '#686868',
      secondary: 'rgb(215, 186, 255)',
      onSecondary: '#332f31',
      secondaryContainer: 'rgb(87, 52, 134)',
      onSecondaryContainer: 'rgb(237, 220, 255)',
      borderSecondaryColor: '#f5f5f5',
      tertiary: 'rgb(245, 183, 178)',
      onTertiary: 'rgb(76, 37, 34)',
      tertiaryContainer: 'rgb(102, 59, 55)',
      onTertiaryContainer: 'rgb(255, 218, 214)',
      error: 'rgb(255, 180, 171)',
      onError: 'rgb(105, 0, 5)',
      errorContainer: 'rgb(147, 0, 10)',
      onErrorContainer: 'rgb(255, 180, 171)',
      background: 'rgb(13, 17, 23)',
      secondaryBackground: '#B6A5CA',
      lightBackground: '#D2C5E1',
      onBackground: '#1e1a1c',
      surface: 'rgb(30, 27, 30)',
      onSurface: 'rgb(232, 224, 229)',
      surfaceVariant: 'rgb(76, 68, 76)',
      onSurfaceVariant: 'rgb(207, 195, 205)',
      outline: 'rgb(152, 142, 151)',
      outlineVariant: 'rgb(76, 68, 76)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(232, 224, 229)',
      inverseOnSurface: 'rgb(51, 47, 51)',
      inversePrimary: 'rgb(133, 66, 153)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(41, 34, 41)',
        level2: 'rgb(47, 39, 48)',
        level3: 'rgb(53, 43, 55)',
        level4: 'rgb(55, 45, 57)',
        level5: 'rgb(59, 48, 62)'
      },
      surfaceDisabled: 'rgba(232, 224, 229, 0.12)',
      onSurfaceDisabled: 'rgba(232, 224, 229, 0.38)',
      backdrop: 'rgba(53, 46, 54, 0.4)',
      dark: 'rgb(250, 250, 250)',
      onDark: 'rgb(0, 54, 61)',
      darkContainer: 'rgb(0, 79, 88)',
      onDarkContainer: 'rgb(151, 240, 255)'
    }
  }

  const darkTheme = {
    ...DefaultTheme,
    ...darkColors
  }

  const lightTheme = {
    ...DefaultTheme,
    ...lightColors
  }

  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme

  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    const prepareApp = async () => {
      try {
        // const locales = Localization.getLocales()
        // if (locales.length > 0 && locales[0].languageCode === 'ar') {
        //   I18nManager.forceRTL(true)
        // } else {
        //   I18nManager.forceRTL(false)
        // }

        // Ensure splash screen is shown for at least 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000))

        // If fonts are loaded or there is a font error, mark app as ready
        if (fontsLoaded || fontError) {
          setAppIsReady(true)
        }
      } catch (e) {
        console.warn(e)
      }
    }

    prepareApp()
  }, [fontsLoaded, fontError])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
              <RootNavigator onLayout={onLayoutRootView} />
            </NavigationContainer>
          </GestureHandlerRootView>
          <Toast />
        </QueryClientProvider>
      </PaperProvider>
    </AuthProvider>
  )
}

//eas build -p android --profile preview
