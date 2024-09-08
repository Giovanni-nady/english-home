import { View, Text, Platform, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'
import HeaderNavigator from '@/components/HeaderNavigator'
import { useTheme } from 'react-native-paper'
import TextComponent from '@textComponent'
import { Image } from 'expo-image'
import { useAuth } from '@/context/AuthContext'
import { blurhash } from '@/constants/Data'
import { useTranslation } from 'react-i18next'
import { Ionicons } from '@expo/vector-icons'

export default function QAScreen () {
  const theme = useTheme()
  const { t } = useTranslation()
  const { userData } = useAuth()

  return (
    <SafeAreaViewLayout backgroundColor='onSecondary' statusContentStyle='light'>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 12, flexDirection: 'column', gap: 16 }}>
          <View style={{ padding: 8 }}>
            <HeaderNavigator title='QA.title' goBack={false} />
          </View>

          {/* card */}
          <View>
            <View
              style={{
                backgroundColor: theme.colors.primary,
                padding: 16,
                paddingHorizontal: 14,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='white'
                // align={i18n.dir() === 'rtl' ? 'right' : 'left'}
              >
                {t('title')}
              </TextComponent>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 100,
                  padding: 8
                }}
              >
                <Ionicons
                  name='ear-outline'
                  size={26}
                  color={theme.colors.primary}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: theme.colors.onTertiary,
                padding: 16,
                paddingHorizontal: 14,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
                // align={i18n.dir() === 'rtl' ? 'right' : 'left'}
              >
                {t('title')}
              </TextComponent>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  borderRadius: 100,
                  padding: 8
                }}
              >
                <Ionicons
                  name='ear-outline'
                  size={26}
                  color={theme.colors.onTertiary}
                />
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: theme.colors.primary,
                padding: 16,
                paddingHorizontal: 14,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='white'
                // align={i18n.dir() === 'rtl' ? 'right' : 'left'}
              >
                {t('title')}
              </TextComponent>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 100,
                  padding: 8
                }}
              >
                <Ionicons
                  name='ear-outline'
                  size={26}
                  color={theme.colors.primary}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: theme.colors.onTertiary,
                padding: 16,
                paddingHorizontal: 14,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
                // align={i18n.dir() === 'rtl' ? 'right' : 'left'}
              >
                {t('title')}
              </TextComponent>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  borderRadius: 100,
                  padding: 8
                }}
              >
                <Ionicons
                  name='ear-outline'
                  size={26}
                  color={theme.colors.onTertiary}
                />
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: theme.colors.primary,
                padding: 16,
                paddingHorizontal: 14,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='white'
                // align={i18n.dir() === 'rtl' ? 'right' : 'left'}
              >
                {t('title')}
              </TextComponent>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 100,
                  padding: 8
                }}
              >
                <Ionicons
                  name='ear-outline'
                  size={26}
                  color={theme.colors.primary}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: theme.colors.onTertiary,
                padding: 16,
                paddingHorizontal: 14,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
                // align={i18n.dir() === 'rtl' ? 'right' : 'left'}
              >
                {t('title')}
              </TextComponent>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  borderRadius: 100,
                  padding: 8
                }}
              >
                <Ionicons
                  name='ear-outline'
                  size={26}
                  color={theme.colors.onTertiary}
                />
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: theme.colors.primary,
                padding: 16,
                paddingHorizontal: 14,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='white'
                // align={i18n.dir() === 'rtl' ? 'right' : 'left'}
              >
                {t('title')}
              </TextComponent>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 100,
                  padding: 8
                }}
              >
                <Ionicons
                  name='ear-outline'
                  size={26}
                  color={theme.colors.primary}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: theme.colors.onTertiary,
                padding: 16,
                paddingHorizontal: 14,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
                // align={i18n.dir() === 'rtl' ? 'right' : 'left'}
              >
                {t('title')}
              </TextComponent>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  borderRadius: 100,
                  padding: 8
                }}
              >
                <Ionicons
                  name='ear-outline'
                  size={26}
                  color={theme.colors.onTertiary}
                />
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: theme.colors.primary,
                padding: 16,
                paddingHorizontal: 14,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='white'
                // align={i18n.dir() === 'rtl' ? 'right' : 'left'}
              >
                {t('title')}
              </TextComponent>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 100,
                  padding: 8
                }}
              >
                <Ionicons
                  name='ear-outline'
                  size={26}
                  color={theme.colors.primary}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: theme.colors.onTertiary,
                padding: 16,
                paddingHorizontal: 14,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <TextComponent
                fontFamily='Roboto-Medium-500'
                size='titleLarge'
                color='textPrimaryColor'
                // align={i18n.dir() === 'rtl' ? 'right' : 'left'}
              >
                {t('title')}
              </TextComponent>
              <View
                style={{
                  backgroundColor: theme.colors.primary,
                  borderRadius: 100,
                  padding: 8
                }}
              >
                <Ionicons
                  name='ear-outline'
                  size={26}
                  color={theme.colors.onTertiary}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaViewLayout>
  )
}
