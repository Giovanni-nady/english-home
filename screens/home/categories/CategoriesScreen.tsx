import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CategoriesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return (
      <SafeAreaView>
          <Button  onPress={()=>{navigation.goBack()}}>go back</Button>
      <Text>CategoriesScreen</Text>
    </SafeAreaView>
  )
}