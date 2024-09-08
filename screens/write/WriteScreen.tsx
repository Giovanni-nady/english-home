import { View, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import TextComponent from '@textComponent'
import { useTranslation } from 'react-i18next'
import { Entypo } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper'

export default function WriteScreen () {
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
                  {t('write.write-title')}
                </TextComponent>
                <TextComponent
                  fontFamily='Roboto-Bold-700'
                  size='titleLarge'
                  color='textPrimaryColor'
                >
                  {t('write.write-title-ar')}
                </TextComponent>
              </>
            ) : (
              <>
                <TextComponent
                  fontFamily='Roboto-Bold-700'
                  size='titleLarge'
                  color='textPrimaryColor'
                >
                  {t('write.write-title-ar')}
                </TextComponent>
                <TextComponent
                  fontFamily='Roboto-Bold-700'
                  size='titleLarge'
                  color='textPrimaryColor'
                >
                  {t('write.write-title')}
                </TextComponent>
              </>
            )}
          </View>

          <View style={{ gap: 12, flexWrap: 'nowrap' }}>
            <View style={{ flexDirection: 'row' }}>
              {i18n.dir() === 'ltr' && (
                <Entypo name='dot-single' size={24} color='black' />
              )}
              <TextComponent
                fontFamily='Roboto-Regular-400'
                size='titleLarge'
                align={i18n.dir() === 'ltr' ? 'left' : 'right'}
                style={{
                  flexShrink: 1,
                  flexWrap: 'wrap',
                  flex: 1,
                  alignItems: 'center'
                }}
              >
                My childhood was full of
                <View>
                  <TextInput
                    label='answer'
                    mode='outlined'
                    inputMode='text'
                    autoCapitalize='none'
                    keyboardType='default'
                    placeholder='Enter your first name'
                    style={{
                      height: 18
                      // flexShrink: 1,
                      // flexWrap: 'wrap'
                      // flex: 1
                    }}
                    value={''}
                    //   onBlur={handleBlur('firstName')}
                    //   onChangeText={handleChange('firstName')}
                  />
                </View>
                memories and adventures.{' '}
              </TextComponent>
              {i18n.dir() === 'rtl' && (
                <Entypo name='dot-single' size={24} color='black' />
              )}
            </View>

            <View style={{ flexDirection: 'row' }}>
              {i18n.dir() === 'ltr' && (
                <Entypo name='dot-single' size={24} color='black' />
              )}
              <TextComponent
                fontFamily='Roboto-Regular-400'
                size='titleLarge'
                align={i18n.dir() === 'ltr' ? 'left' : 'right'}
                style={{
                  flexShrink: 1,
                  flexWrap: 'wrap',
                  flex: 1,
                  alignItems: 'center'
                }}
              >
                My childhood was full of
                <View>
                  <TextInput
                    label='answer'
                    mode='outlined'
                    inputMode='text'
                    autoCapitalize='none'
                    keyboardType='default'
                    placeholder='Enter your first name'
                    style={{
                      height: 18
                      // flexShrink: 1,
                      // flexWrap: 'wrap'
                      // flex: 1
                    }}
                    value={''}
                    //   onBlur={handleBlur('firstName')}
                    //   onChangeText={handleChange('firstName')}
                  />
                </View>
                memories and adventures.{' '}
              </TextComponent>
              {i18n.dir() === 'rtl' && (
                <Entypo name='dot-single' size={24} color='black' />
              )}
            </View>

            <View style={{ flexDirection: 'row' }}>
              {i18n.dir() === 'ltr' && (
                <Entypo name='dot-single' size={24} color='black' />
              )}
              <TextComponent
                fontFamily='Roboto-Regular-400'
                size='titleLarge'
                align={i18n.dir() === 'ltr' ? 'left' : 'right'}
                style={{
                  flexShrink: 1,
                  flexWrap: 'wrap',
                  flex: 1,
                  alignItems: 'center'
                }}
              >
                My childhood was full of
                <View>
                  <TextInput
                    label='answer'
                    mode='outlined'
                    inputMode='text'
                    autoCapitalize='none'
                    keyboardType='default'
                    placeholder='Enter your first name'
                    style={{
                      height: 18
                      // flexShrink: 1,
                      // flexWrap: 'wrap'
                      // flex: 1
                    }}
                    value={''}
                    //   onBlur={handleBlur('firstName')}
                    //   onChangeText={handleChange('firstName')}
                  />
                </View>
                memories and adventures.{' '}
              </TextComponent>
              {i18n.dir() === 'rtl' && (
                <Entypo name='dot-single' size={24} color='black' />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaViewLayout>
  )
}
