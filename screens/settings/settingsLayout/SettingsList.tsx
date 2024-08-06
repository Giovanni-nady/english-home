import { View, I18nManager, FlatList, Platform } from 'react-native'
import useLogout from '@/shared/Logout'
import SwitchSelector from 'react-native-switch-selector'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import RNRestart from 'react-native-restart'
import { useTheme } from 'react-native-paper'
import TextComponent from '@/components/TextComponent'
import React, { useMemo, useRef } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'

import SingleOptionItem from '@/components/settings/SingleOptionItem'
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome6,
  Ionicons,
  SimpleLineIcons
} from '@expo/vector-icons'

export default function SettingsList () {
  const theme = useTheme()
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const { t, i18n } = useTranslation()
  const handleLogout = useLogout()

  const options = [
    {
      label: 'English',
      value: 'en',
      testID: 'switch-en',
      accessibilityLabel: 'switch-en'
    },
    {
      label: 'العربيه',
      value: 'ar',
      testID: 'switch-ar',
      accessibilityLabel: 'switch-ar'
    }
  ]

  const settingsConfig = [
    {
      id: 0,
      title: t('setting.account-information'),
      onClick: () => navigation.navigate('AccountInfoStack'),
      icon: <AntDesign name='user' size={20} color='black' />
    },
    {
      id: 1,
      title: t('setting.notifications'),
      onClick: () => null,
      icon: <Ionicons name='notifications-outline' size={20} color='black' />
    },
    {
      id: 2,
      title: t('setting.language'),
      onClick: () => {
        bottomSheetRef.current?.expand() // Open the BottomSheet
      },
      icon: <FontAwesome6 name='language' size={20} color='black' />
    },
    {
      id: 3,
      title: t('setting.blocked'),
      onClick: () => null,
      icon: <Entypo name='block' size={20} color='black' />
    },
    {
      id: 4,
      title: t('setting.help'),
      onClick: () => null,
      icon: <Feather name='help-circle' size={20} color='black' />
    },
    {
      id: 5,
      title: t('setting.payment-settings'),
      onClick: () => null,
      icon: <SimpleLineIcons name='wallet' size={20} color='black' />
    },
    {
      id: 6,
      title: t('setting.logout'),
      onClick: handleLogout,
      icon: <AntDesign name='logout' size={20} color='black' />
    }
  ]

  const renderItem = ({ item }: { item: typeof settingsConfig[0] }) => (
    <SingleOptionItem
      key={item.id}
      onClick={item.onClick}
      title={item.title}
      Icon={item.icon}
    />
  )

  const bottomSheetRef = useRef<BottomSheet>(null)

  // callbacks
  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index)
  // }, [])

  const snapPoints = useMemo(() => [1, '20%'], [])

  return (
    <>
      <View
        style={{
          marginVertical: -70,
          padding: 25,
          paddingHorizontal: 20,
          backgroundColor: theme.colors.background,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          flex: 1
        }}
      >
        <View
          style={{
            padding: 10,
            marginBottom: Platform.OS === 'ios' ? 30 : 50,
            backgroundColor: theme.colors.onSecondary,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#E5E5E3'
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ flexGrow: 1 }}
            data={settingsConfig}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 1,
                  backgroundColor: '#E5E5E3',
                  marginVertical: 1
                }}
              />
            )}
          />
        </View>

        {/* <Text>Hello {i18n?.dir()}</Text> */}
        {/* <Text>{JSON.stringify(userData, null, 2)}</Text> */}
      </View>

      <BottomSheet
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        // onChange={handleSheetChanges}
      >
        <BottomSheetView
          style={{
            flex: 1,
            padding: 12,
            gap: 10
          }}
        >
          <TextComponent
            size='titleLarge'
            fontFamily='Roboto-Regular-400'
            align='left'
          >
            Change your language
          </TextComponent>
          <SwitchSelector
            textColor={theme.colors.primary}
            selectedColor={theme.colors.onSecondary}
            buttonColor={theme.colors.primary}
            borderColor={theme.colors.primary}
            options={options}
            hasPadding
            initial={i18n.language === 'en' ? 0 : 1}
            onPress={(value: any) => {
              console.log(`Call onPress with value: ${value}`)
              i18n
                .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
                .then(() => {
                  I18nManager.forceRTL(i18n.language === 'ar')
                  RNRestart.restart()
                  bottomSheetRef.current?.close()
                })
            }}
          />
        </BottomSheetView>
      </BottomSheet>
    </>
  )
}
