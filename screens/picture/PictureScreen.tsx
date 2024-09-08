import { View, Text, Platform } from 'react-native'
import React from 'react'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import HeaderNavigator from '@/components/HeaderNavigator'
import { useTheme } from 'react-native-paper'
import TextComponent from '@textComponent'
import { Image } from 'expo-image'
import { useAuth } from '@/context/AuthContext'
import { blurhash } from '@/constants/Data'
import { useTranslation } from 'react-i18next'

export default function PictureScreen () {
  const theme = useTheme()
  const { t } = useTranslation()
  const { userData } = useAuth()

  return (
    <SafeAreaViewLayout backgroundColor='onSecondary' statusContentStyle='light'>
      <View style={{ padding: 12, flexDirection: 'column', gap: 14 }}>
        <View style={{ padding: 8 }}>
          <HeaderNavigator title='picture.title' goBack={false} />
        </View>

        {/* image */}
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 30,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 6
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12
          }}
        >
          <View
            style={{
              width: '100%',
              height: 300,
              backgroundColor: '#fff',
              borderRadius: 30,
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 6
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 12
            }}
          >
            <Image
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                borderRadius: 30
              }}
              source={{
                uri: userData?.applicant?.avatar
              }}
              placeholder={{ blurhash }}
              contentFit='cover'
              transition={1000}
            />
          </View>
          <View style={{ paddingHorizontal: 22, paddingVertical: 16 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <TextComponent fontFamily='Roboto-Bold-700' size='titleMedium'>
                {t('picture.photo')}
              </TextComponent>
              <TextComponent fontFamily='Roboto-Bold-700' size='titleLarge'>
                {t('picture.nature')}
              </TextComponent>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 8
              }}
            >
              <TextComponent size='titleMedium'>
                {t('picture.sub-photo')}
              </TextComponent>
              <TextComponent size='titleLarge'>
                {t('picture.sub-nature')}
              </TextComponent>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaViewLayout>
  )
}
