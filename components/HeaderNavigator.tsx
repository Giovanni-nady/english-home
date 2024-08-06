import { View, Text, I18nManager } from 'react-native'
import React from 'react'
import TextComponent from './TextComponent'
import { useTranslation } from 'react-i18next'
import PrimaryButton from './PrimaryButton'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useTheme } from 'react-native-paper'

export default function HeaderNavigator ({
  title,
  goBack = true
}: {
  title: string
  goBack?: boolean
}) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const theme = useTheme()
  const { t, i18n } = useTranslation()
  const isRtl = I18nManager.isRTL

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 35
      }}
    >
      {goBack && (
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
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
          }}
        >
          <PrimaryButton
            title=''
            style={{
              alignSelf: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'center',
              width: 50,
              height: 50
            }}
            onPress={() => navigation.goBack()}
            bgColor='onSecondary'
            borderColor='onSecondary'
            touchableOpacity={true}
            textColor='onPrimary'
          >
            {isRtl ? (
              <AntDesign name='arrowright' size={24} color='black' />
            ) : (
              <AntDesign name='arrowleft' size={24} color='black' />
            )}
          </PrimaryButton>
        </View>
      )}

      <TextComponent
        fontFamily='Roboto-Medium-500'
        size='titleLarge'
        color='dark'
        align='center'
      >
        {t(title)}
      </TextComponent>

      {goBack && (
        <View style={{ alignSelf: 'flex-start', width: 50, height: 50 }}></View>
      )}
    </View>
  )
}
