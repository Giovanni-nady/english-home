import React from 'react'
import { View, Text, StyleSheet, Pressable, I18nManager } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import useLogout from '@/shared/Logout'
import { useTranslation } from 'react-i18next'
import { Image } from 'expo-image'
import { blurhash } from '@/constants/Data'
import RNRestart from 'react-native-restart'

const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation()
  const handleLogout = useLogout()
  const { i18n } = useTranslation()
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Custom Header</Text>

        <Pressable
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 6,
            backgroundColor: 'white',
            borderRadius: 12,
            paddingVertical: 4,
            paddingHorizontal: 12
          }}
          onPress={(value: any) => {
            console.log(`Call onPress with value: ${value}`)
            i18n
              .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
              .then(() => {
                I18nManager.forceRTL(i18n.language === 'ar')
                RNRestart.restart()
                // bottomSheetRef.current?.close()
              })
          }}
        >
          {i18n.language === 'ar' ? (
            <>
              <Image
                style={{
                  width: 30,
                  height: 30
                }}
                source={require('./../../assets/images/ar.png')}
                placeholder={{ blurhash }}
                contentFit='cover'
                transition={1000}
              />

              <Text>AR</Text>
            </>
          ) : (
            <>
              <Image
                style={{
                  width: 30,
                  height: 30
                }}
                source={require('./../../assets/images/en.png')}
                placeholder={{ blurhash }}
                contentFit='cover'
                transition={1000}
              />

              <Text>EN</Text>
            </>
          )}
        </Pressable>
      </View>
      <View style={styles.drawerContent}>
        <DrawerItemList {...props} />
        <DrawerItem label='Logout' onPress={handleLogout} />
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  drawerHeader: {
    height: 150,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 0,
    margin: 0
  },
  drawerHeaderText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  drawerContent: {
    padding: 0,
    margin: 0
  }
})

export default CustomDrawerContent
