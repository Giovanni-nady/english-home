import { View, Text } from 'react-native'
import React from 'react'
import { Searchbar, TextInput } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'

export default function HomeSearchBar ({ theme }: { theme: any }) {
  const [searchQuery, setSearchQuery] = React.useState('')
  const { t } = useTranslation()
  return (
    <View
      style={{
        backgroundColor: theme.colors.secondaryBackground,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        padding: 35,
        paddingBottom: 100
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12
        }}
      >
        <View style={{ flexGrow: 1 }}>
          <Searchbar
            placeholder={t('home.search')}
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={{
              borderRadius: 10,
              backgroundColor: theme.colors.background
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: theme.colors.background,
            height: '95%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            borderRadius: 10
          }}
        >
          <Ionicons name='filter' size={24} color='black' />
        </View>
      </View>
    </View>
  )
}
