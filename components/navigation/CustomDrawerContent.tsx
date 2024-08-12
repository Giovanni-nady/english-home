import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import useLogout from '@/shared/Logout'

const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation()
  const handleLogout = useLogout()

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Custom Header</Text>
      </View>
      <View style={styles.drawerContent}>
        <DrawerItemList {...props} />
        <DrawerItem
          label='Logout'
          onPress={handleLogout}
        />
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  drawerHeader: {
    height: 150,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
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
