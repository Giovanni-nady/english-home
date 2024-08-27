import React from 'react'
import HomeScreen from './../screens/home/HomeScreen' // Import your home screen
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '@/screens/home/categories/CategoriesScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons
} from '@expo/vector-icons'
import SettingsScreen from '@/screens/settings/SettingsScreen'
import NearbySalonsScreen from '@/screens/home/nearbySalons/NearbySalonsScreen'
import AccountInfoScreen from '@/screens/settings/AccountInfo/AccountInfoScreen'
import PersonalDetailsScreen from '@/screens/settings/AccountInfo/PersonalDetailsScreen'
import ChangePasswordScreen from '@/screens/settings/AccountInfo/ChangePasswordScreen'
import { Platform, useColorScheme } from 'react-native'
import HotOffersScreen from '@/screens/home/hotOffers/HotOffersScreen'
import TopRatedScreen from '@/screens/home/topRated/TopRatedScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerContent from '@/components/navigation/CustomDrawerContent'
import PictureScreen from '@/screens/picture/PictureScreen'
import QAScreen from '@/screens/favorite/QAScreen'
import GrammarScreen from '@/screens/grammar/GrammarScreen'

type AppStackParamList = {
  Dashboard: undefined
  Categories: undefined
  NearbySalons: undefined
  HotOffers: undefined
  TopRated: undefined
  Home: undefined
  Picture: undefined
  QA: undefined
  Grammar: undefined
  Setting: undefined
  Settings: undefined
  AccountInfo: undefined
  PersonalDetails: undefined
  AccountInfoStack: undefined
  ChangePassword: undefined
}

const Tab = createDrawerNavigator<AppStackParamList>()
const Stack = createNativeStackNavigator<AppStackParamList>()

function HomeStack () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Dashboard' component={HomeScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen} />
      <Stack.Screen name='NearbySalons' component={NearbySalonsScreen} />
      <Stack.Screen name='HotOffers' component={HotOffersScreen} />
      <Stack.Screen name='TopRated' component={TopRatedScreen} />
    </Stack.Navigator>
  )
}

function PersonalDetailsStack () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='AccountInfo' component={AccountInfoScreen} />
      <Stack.Screen name='PersonalDetails' component={PersonalDetailsScreen} />
      <Stack.Screen name='ChangePassword' component={ChangePasswordScreen} />
    </Stack.Navigator>
  )
}

function SettingsStack () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Setting' component={SettingsScreen} />
      <Stack.Screen name='AccountInfoStack' component={PersonalDetailsStack} />
    </Stack.Navigator>
  )
}

const AppStack = () => {
  const colorScheme = useColorScheme()

  return (
    <Tab.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='Picture' component={PictureScreen} />
      <Tab.Screen
        name='QA'
        component={QAScreen}
        options={{ drawerLabel: 'Q&A', headerTitle: 'Q&A' }}
      />
      <Tab.Screen name='Grammar' component={GrammarScreen} />
      <Tab.Screen name='Settings' component={SettingsStack} />
    </Tab.Navigator>
  )
}

export default AppStack
