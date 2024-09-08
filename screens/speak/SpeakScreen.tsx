import { View, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import TextComponent from '@textComponent'
import { useTranslation } from 'react-i18next'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function SpeakScreen () {
  const { t, i18n } = useTranslation()
  return (
    <SafeAreaViewLayout
      backgroundColor='onSecondary'
      statusContentStyle='light'
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 12, flexDirection: 'column', gap: 26 }}>
          <View
            style={{
              paddingTop: 8,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            {i18n.dir() === 'ltr' ? (
              <>
                <TextComponent
                  fontFamily='Roboto-Bold-700'
                  size='titleLarge'
                  color='textPrimaryColor'
                >
                  {t('speak.speak-title')}
                </TextComponent>
                <TextComponent
                  fontFamily='Roboto-Bold-700'
                  size='titleLarge'
                  color='textPrimaryColor'
                >
                  {t('speak.speak-title-ar')}
                </TextComponent>
              </>
            ) : (
              <>
                <TextComponent
                  fontFamily='Roboto-Bold-700'
                  size='titleLarge'
                  color='textPrimaryColor'
                >
                  {t('speak.speak-title-ar')}
                </TextComponent>
                <TextComponent
                  fontFamily='Roboto-Bold-700'
                  size='titleLarge'
                  color='textPrimaryColor'
                >
                  {t('speak.speak-title')}
                </TextComponent>
              </>
            )}
          </View>

          <View style={{ gap: 30, flexWrap: 'nowrap' }}>
            <View style={{ gap: 8 }}>
              <View style={{ flexDirection: 'row' }}>
                {i18n.dir() === 'ltr' && (
                  <Entypo name='dot-single' size={24} color='black' />
                )}
                <TextComponent
                  fontFamily='Roboto-Regular-400'
                  size='titleLarge'
                  align={i18n.dir() === 'ltr' ? 'left' : 'right'}
                  style={{ flexShrink: 1, flexWrap: 'wrap', flex: 1 }}
                >
                  We use it to say that something happens usually, repeatedly,
                  or that it is a fact in general.
                </TextComponent>

                {i18n.dir() === 'rtl' && (
                  <Entypo name='dot-single' size={24} color='black' />
                )}
              </View>
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  paddingHorizontal: 34,
                  paddingVertical: 12,
                  borderWidth: 2,
                  borderColor: '#331D2C',
                  borderRadius: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12
                }}
              >
                <FontAwesome name='microphone' size={24} color='#331D2C' />

                <TextComponent>{t('speak.record')}</TextComponent>
              </TouchableOpacity>
            </View>

            <View style={{ gap: 8 }}>
              <View style={{ flexDirection: 'row' }}>
                {i18n.dir() === 'ltr' && (
                  <Entypo name='dot-single' size={24} color='black' />
                )}
                <TextComponent
                  fontFamily='Roboto-Regular-400'
                  size='titleLarge'
                  align={i18n.dir() === 'ltr' ? 'left' : 'right'}
                  style={{ flexShrink: 1, flexWrap: 'wrap', flex: 1 }}
                >
                  In general, we speak about things in the present simple.
                </TextComponent>
                {i18n.dir() === 'rtl' && (
                  <Entypo name='dot-single' size={24} color='black' />
                )}
              </View>
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  paddingHorizontal: 34,
                  paddingVertical: 12,
                  borderWidth: 2,
                  borderColor: '#331D2C',
                  borderRadius: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12
                }}
              >
                <FontAwesome name='microphone' size={24} color='#331D2C' />

                <TextComponent>{t('speak.record')}</TextComponent>
              </TouchableOpacity>
            </View>

            <View style={{ gap: 8 }}>
              <View style={{ flexDirection: 'row' }}>
                {i18n.dir() === 'ltr' && (
                  <Entypo name='dot-single' size={24} color='black' />
                )}
                <TextComponent
                  fontFamily='Roboto-Regular-400'
                  size='titleLarge'
                  align={i18n.dir() === 'ltr' ? 'left' : 'right'}
                  style={{ flexShrink: 1, flexWrap: 'wrap', flex: 1 }}
                >
                  A routine or fact is expressed in the simple present tense.
                </TextComponent>
                {i18n.dir() === 'rtl' && (
                  <Entypo name='dot-single' size={24} color='black' />
                )}
              </View>
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  paddingHorizontal: 34,
                  paddingVertical: 12,
                  borderWidth: 2,
                  borderColor: '#331D2C',
                  borderRadius: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12
                }}
              >
                <FontAwesome name='microphone' size={24} color='#331D2C' />

                <TextComponent>{t('speak.record')}</TextComponent>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaViewLayout>
  )
}
