import React from 'react';
import HomeScreen from './../screens/home/HomeScreen'; // Import your home screen
// import ProfileScreen from '../screens/ProfileScreen'; // Import your profile screen
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type AppStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }} >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
