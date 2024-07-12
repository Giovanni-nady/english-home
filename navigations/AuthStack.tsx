import React from 'react';
import LoginScreen from '@/screens/auth/login/LoginScreen'; 
import SignUpScreen from '@/screens/auth/signup/SignUpScreen'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
