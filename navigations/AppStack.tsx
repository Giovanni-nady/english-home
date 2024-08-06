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
import FavoriteScreen from '@/screens/favorite/FavoriteScreen'
import NearbySalonsScreen from '@/screens/home/nearbySalons/NearbySalonsScreen'
import ReservationsScreen from '@/screens/reservations/ReservationsScreen'
import MessagesScreen from '@/screens/messages/MessagesScreen'
import AccountInfoScreen from '@/screens/settings/AccountInfo/AccountInfoScreen'
import PersonalDetailsScreen from '@/screens/settings/AccountInfo/PersonalDetailsScreen'
import ChangePasswordScreen from '@/screens/settings/AccountInfo/ChangePasswordScreen'
import { Platform } from 'react-native'
import HotOffersScreen from '@/screens/home/hotOffers/HotOffersScreen'
import TopRatedScreen from '@/screens/home/topRated/TopRatedScreen'

type AppStackParamList = {
  Dashboard: undefined
  Categories: undefined
  NearbySalons: undefined
  HotOffers: undefined
  TopRated: undefined
  Home: undefined
  Reservations: undefined
  Favorite: undefined
  Messages: undefined
  Setting: undefined
  Settings: undefined
  AccountInfo: undefined
  PersonalDetails: undefined
  AccountInfoStack: undefined
  ChangePassword: undefined
}

const Tab = createBottomTabNavigator<AppStackParamList>()
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
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <AntDesign name={'home'} size={size} color={color} />
          } else if (route.name === 'Categories') {
            return <FontAwesome name={'ticket'} size={size} color={color} />
          } else if (route.name === 'Settings') {
            return (
              <Ionicons name='settings-outline' size={size} color={color} />
            )
          } else if (route.name === 'Favorite') {
            return <FontAwesome5 name='heart' size={size} color={color} />
          } else if (route.name === 'Reservations') {
            return <Ionicons name='ticket-outline' size={size} color={color} />
          } else if (route.name === 'Messages') {
            return <AntDesign name='message1' size={size} color={color} />
          }

          return null

          // return <AntDesign name={iconName} size={size} color={color} />
          // You can return any component that you like here!
        },
        tabBarStyle: { height: Platform.OS === 'ios' ? 100 : 60 },
        tabBarLabelStyle: { paddingBottom: 8, fontSize: 12 },
        tabBarActiveTintColor: '#A25DB6',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}
    >
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='Reservations' component={ReservationsScreen} />
      <Tab.Screen name='Favorite' component={FavoriteScreen} />
      <Tab.Screen name='Messages' component={MessagesScreen} />
      <Tab.Screen name='Settings' component={SettingsStack} />
    </Tab.Navigator>
  )
}

export default AppStack
