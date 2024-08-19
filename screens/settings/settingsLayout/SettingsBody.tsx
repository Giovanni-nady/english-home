import { View, I18nManager, FlatList, Platform, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useTheme } from 'react-native-paper'
import TextComponent from '@/components/TextComponent'
import React from 'react'

import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome6,
  Ionicons,
  SimpleLineIcons
} from '@expo/vector-icons'

export default function SettingsBody () {
  const theme = useTheme()
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const { t, i18n } = useTranslation()

  return (
    <>
      <View
        style={{
          marginTop: 45
        }}
      >
        <TextComponent
          fontFamily='Roboto-Bold-700'
          size='titleLarge'
          color='textPrimaryColor'
          style={{ marginStart: 6 }}
        >
          {t('setting.body-title')}
        </TextComponent>
        <TextComponent
          fontFamily='Roboto-Medium-500'
          size='bodyLarge'
          color='textPrimaryColor'
          style={{ marginStart: 6, marginTop: 8 }}
        >
          {t('setting.body-subtitle')}
        </TextComponent>

        <View
          style={{
            marginTop: 20,
            marginBottom: 35,
            width: '100%',
            padding: 18,
            borderRadius: 24,
            backgroundColor: 'white',
            shadowColor: '#00000040',
            shadowOffset: {
              width: 0,
              height: 6
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12
          }}
        >
          <View>
            <TextComponent
              fontFamily='Roboto-Regular-400'
              size='titleLarge'
              color='textPrimaryColor'
              style={{ marginStart: 6, marginTop: 8 }}
              align={i18n.dir() === 'rtl' ? 'right' : 'left'}
            >
              {t('setting.level')}
            </TextComponent>

            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: 6
                }}
              >
                <Text style={{ color: 'white' }}>1</Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: 6
                }}
              >
                <Text style={{ color: 'white' }}>2</Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: 6
                }}
              >
                <Text style={{ color: 'white' }}>3</Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: 6
                }}
              >
                <Text style={{ color: 'white' }}>4</Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: 6
                }}
              >
                <Text style={{ color: 'white' }}>5</Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={{ color: 'white' }}>6</Text>
              </View>
            </View>
          </View>

          <View>
            <TextComponent
              fontFamily='Roboto-Regular-400'
              size='titleLarge'
              color='textPrimaryColor'
              style={{ marginStart: 6, marginTop: 12 }}
              align={i18n.dir() === 'rtl' ? 'right' : 'left'}
            >
              {t('setting.week')}
            </TextComponent>

            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: 6
                }}
              >
                <Text style={{ color: 'white' }}>1</Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: 6
                }}
              >
                <Text style={{ color: 'white' }}>2</Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: 6
                }}
              >
                <Text style={{ color: 'white' }}>3</Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: 6
                }}
              >
                <Text style={{ color: 'white' }}>4</Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={{ color: 'white' }}>5</Text>
              </View>
            </View>
          </View>

          <View>
            <TextComponent
              fontFamily='Roboto-Regular-400'
              size='titleLarge'
              color='textPrimaryColor'
              style={{ marginStart: 6, marginTop: 12 }}
              align={i18n.dir() === 'rtl' ? 'right' : 'left'}
            >
              {t('setting.day')}
            </TextComponent>

            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: 6
                }}
              >
                <Text style={{ color: 'white' }}>1</Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: 6
                }}
              >
                <Text style={{ color: 'white' }}>2</Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: 6
                }}
              >
                <Text style={{ color: 'white' }}>3</Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: 6
                }}
              >
                <Text style={{ color: 'white' }}>4</Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={{ color: 'white' }}>5</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}
