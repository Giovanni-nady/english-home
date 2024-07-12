import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextComponent from '@textComponent'
import TextInputComponent from '@textInputComponent'
import { Checkbox } from 'react-native-paper'
import PrimaryButton from '@primaryButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { loginValidationSchema } from '@schemas'
import { Formik } from 'formik'
import { setAuthToken } from '@/constants/Storage'

export default function LoginForm () {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const handleFormSubmit = async (values: {
    email: string
    password: string
  }) => {
    // Handle form submission logic here
    console.log('Form submitted with values:', values)
    await setAuthToken('token')
    navigation.reset({
      index: 0,
      routes: [{ name: 'App', params: { screen: 'Home' } }]
    })

    // navigation.navigate('Home'); // Example navigation

    //           showToast({
    //    type: 'error',
    //    title: 'Something went wrong',
    //    body: (error as any)?.data?.message ?? 'An error occurred'
    //  })
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginValidationSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
        dirty
      }) => (
        <View>
          <View>
            <View style={{ marginTop: 20 }}>
              <TextInputComponent
                label='Email'
                type='email'
                placeholder='Enter your email'
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email && touched.email ? errors.email : undefined}
              />
            </View>

            <View style={{ marginTop: 12 }}>
              <TextInputComponent
                label='Password'
                secure
                placeholder='***********'
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={
                  errors.password && touched.password
                    ? errors.password
                    : undefined
                }
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginVertical: 6,
              alignItems: 'center'
            }}
          >
            {/* <Checkbox.Item mode='android' position='leading'
                      label='Remember Me' status='checked' /> */}
            <TouchableOpacity>
              <TextComponent
                size='titleMedium'
                fontFamily='Roboto-Regular-400'
                color='dark'
              >
                Forgot password?
              </TextComponent>
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 24 }}>
            <PrimaryButton
              title='Login'
              disabled={!isValid || !dirty}
              onPress={handleSubmit}
              bgColor='primary'
              borderColor='primary'
              touchableOpacity={true}
              textColor='onPrimary'
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              paddingVertical: 12
            }}
          >
            <TextComponent
              color='secondaryText'
              align='center'
              fontFamily='Roboto-Regular-400'
              size='titleMedium'
            >
              Don’t have an account?
            </TextComponent>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => {
                navigation.navigate('SignUp')
              }}
            >
              <TextComponent
                align='center'
                fontFamily='Roboto-Regular-400'
                size='titleMedium'
              >
                Register now
              </TextComponent>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  )
}
