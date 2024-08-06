import { View, Text } from 'react-native'
import React, { useCallback, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import TextComponent from '@textComponent'
import { useTranslation } from 'react-i18next'
import { Image } from 'expo-image'
import { useAuth } from '@/context/AuthContext'
import { useFocusEffect } from '@react-navigation/native'

export default function HomeHeader ({ theme }: { theme: any }) {
  const { userData, setUserData } = useAuth()

  const { t } = useTranslation()
  const [greeting, setGreeting] = useState('')

  const getGreeting = () => {
    const currentHour = new Date().getHours()
    if (currentHour < 12) {
      return t('home.greetingMorning')
    } else {
      return t('home.greetingAfternoon')
    }
  }

  useFocusEffect(
    useCallback(() => {
      setGreeting(getGreeting())

      // Update the greeting every hour
      const intervalId = setInterval(() => {
        setGreeting(getGreeting())
      }, 3600000) // 3600000 ms = 1 hour

      // Cleanup interval on component unmount
      return () => clearInterval(intervalId)
    }, [t])
  )

  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

  return (
    <View style={{ alignItems: 'center' }}>
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 20
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <View style={{ width: 60, height: 60 }}>
            <Image
              style={{
                flex: 1,
                width: '100%',
                backgroundColor: '#0553',
                borderRadius: 100
              }}
              source={{
                uri: userData.applicant.avatar
              }}
              placeholder={{ blurhash }}
              contentFit='cover'
              transition={1000}
            />
          </View>
          <View>
            <TextComponent
              fontFamily='Roboto-Regular-400'
              size='titleMedium'
              color='dark'
            >
              {greeting}
            </TextComponent>

            <TextComponent
              fontFamily='Roboto-Bold-700'
              size='titleLarge'
              color='dark'
            >
              {userData?.applicant?.first_name} {userData?.applicant?.last_name}
            </TextComponent>
          </View>
        </View>
        <View
          style={{
            backgroundColor: theme.colors.background,
            width: 50,
            height: 50,
            borderWidth: 1,
            borderColor: theme.colors.background,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            shadowColor: '#000', // Gray shadow
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5 // Android shadow
          }}
        >
          <FontAwesome name='bell-o' size={24} color='black' />
        </View>
      </View>
    </View>
  )
}
