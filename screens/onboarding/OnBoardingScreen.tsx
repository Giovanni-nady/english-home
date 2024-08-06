import {
  View,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withSequence,
  withDelay
} from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { setItem } from '@storage'
import TextComponent from '@textComponent'
import { useTheme } from 'react-native-paper'
import PrimaryButton from '@primaryButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'

const OnBoardingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const theme = useTheme()
  const {t} = useTranslation()
  const [counter, setCounter] = useState(0)
  const imageOpacity = useSharedValue(1)
  const imageScale = useSharedValue(1)
  const imageTranslateY = useSharedValue(0)

  useEffect(() => {
    imageOpacity.value = withSequence(
      withTiming(0, { duration: 300 }),
      withDelay(150, withTiming(1, { duration: 300 }))
    )
    imageScale.value = withSequence(
      withTiming(0.8, { duration: 300 }),
      withDelay(150, withTiming(1, { duration: 300 }))
    )
    imageTranslateY.value = withSequence(
      withTiming(50, { duration: 300 }),
      withDelay(150, withTiming(0, { duration: 300 }))
    )
  }, [counter])

  const pages = [
    {
      title: 'onboarding.title1',
      description:
        'onboarding.description1',
      image: require('./../../assets/images/onboarding1.png')
    },
    {
      title: 'onboarding.title2',
      description: 'onboarding.description2',
      image: require('./../../assets/images/onboarding2.png')
    },
    {
      title: 'onboarding.title3',
      description: 'onboarding.description3',
      image: require('./../../assets/images/onboarding3.png')
    }
  ]

  const indicatorStyles = pages.map((_, index) =>
    useAnimatedStyle(() => ({
      opacity: withTiming(counter === index ? 1 : 0.3, { duration: 300 }),
      transform: [
        {
          scale: withTiming(counter === index ? 1.2 : 0.8, { duration: 300 })
        }
      ]
    }))
  )

  const onComplete = async (type: string) => {
    await setItem('onboarding', '1')

    if (type === 'login') {
      // Navigate to login screen
      // navigation.navigate("Login")
      navigation.reset({
        index: 0,
        routes: [{ name: 'Auth' }]
      })
    } else if (type === 'signup') {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Auth', params: { screen: 'SignUp' } }]
      })
      // Navigate to signup screen
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <ImageBackground
        source={pages[counter].image}
        resizeMode='cover'
        style={{ flex: 1, width: '100%', height: '75%' }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0, 0.40)'
          }}
        >
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
              <Image
                source={require('./../../assets/images/onboarding-logo.png')}
                style={{ width: '100%', height: '75%' }}
                resizeMode='contain'
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-around',
                marginTop: '-40%',
                padding: 10,
                paddingTop: 10,
                backgroundColor: theme.colors.background,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
              }}
            >
              {/* dots */}
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {pages.map((_, index) => (
                  <Animated.View
                    key={index}
                    style={[
                      {
                        marginHorizontal: 4,
                        padding: 6,
                        borderRadius: 50,
                        backgroundColor:
                          counter === index
                            ? theme.colors.primary
                            : theme.colors.secondary
                      },
                      indicatorStyles[index]
                    ]}
                  />
                ))}
              </View>

              {/* text title and description */}
              <View>
                <TextComponent
                  size='headlineMedium'
                  color='dark'
                  align='center'
                  fontFamily='Roboto-Bold-700'
                  style={{ marginBottom: 4 }}
                >
                  {t(pages[counter].title)}
                </TextComponent>

                <TextComponent
                  size='bodyLarge'
                  align='center'
                  color='gray'
                  fontFamily='Roboto-Regular-400'
                >
                  {t(pages[counter].description)}
                </TextComponent>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  gap: 10,
                  marginHorizontal: 8
                }}
              >
                <PrimaryButton
                  touchableOpacity={true}
                  title={counter === 2 ? 'onboarding.login' : 'onboarding.next'}
                  textColor='onPrimary'
                  borderColor='primary'
                  onPress={() => {
                    if (counter === 2) onComplete('login')
                    else setCounter(prev => prev + 1)
                  }}
                />

                <PrimaryButton
                  touchableOpacity={true}
                  title={counter === 2 ? 'onboarding.signUp' : 'onboarding.skip'}
                  borderColor='borderColor'
                  bgColor='onPrimary'
                  onPress={() => {
                    if (counter === 2) onComplete('signup')
                    else onComplete('login')
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default OnBoardingScreen
