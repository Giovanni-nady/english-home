import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useTheme } from 'react-native-paper'
import HeaderNavigator from '@/components/HeaderNavigator'
import UserForm from '@/components/forms/auth/UserForm'
import { useAuth } from '@/context/AuthContext'
import SingleOptionItem from '@/components/settings/SingleOptionItem'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'
import { FlatList, View } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout'

export default function AccountInfoScreen () {
  const theme = useTheme()
  const { userData } = useAuth()
  const { t } = useTranslation()
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const settingsConfig = [
    {
      id: 0,
      title: t('setting.personal-details'),
      onClick: () => navigation.navigate('PersonalDetails'),
      icon: <AntDesign name='user' size={20} color='black' />
    },
    {
      id: 1,
      title: t('setting.change-password'),
      onClick: () => navigation.navigate('ChangePassword'),
      icon: <MaterialIcons name='security' size={20} color='black' />
    }
  ]

  const renderItem = ({ item }: { item: typeof settingsConfig[0] }) => (
    <SingleOptionItem
      key={item.id}
      onClick={item.onClick}
      title={item.title}
      Icon={item.icon}
      // textClassName={item.textClassName}
    />
  )

  return (
    <SafeAreaViewLayout backgroundColor='lightBackground'>
      <HeaderNavigator title='setting.account-information' />

      <View
        style={{
          //   marginVertical: -10,
          padding: 35,
          paddingHorizontal: 20,
          backgroundColor: theme.colors.background,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          flexGrow: 1,
          height: '100%'
        }}
      >
        <View
          style={{
            padding: 10,
            marginBottom: 50,
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
      </View>
    </SafeAreaViewLayout>
  )
}
