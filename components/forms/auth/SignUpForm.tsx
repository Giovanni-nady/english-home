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

export default function SignUpForm () {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const handleFormSubmit = (values: { email: string; password: string }) => {
    // Handle form submission logic here
    console.log('Form submitted with values:', values)
      // navigation.navigate('Home'); // Example navigation
      
//       showToast({
//   type: 'error',
//   title: 'Something went wrong',
//   body: (error as any)?.data?.message ?? 'An error occurred'
// })

  }

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
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
          {/* inputs */}
          <View>
            <View style={{ marginTop: 20 }}>
              <TextInputComponent
                label='First Name'
                type='text'
                placeholder='Please enter your first name'
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                error={
                  errors.firstName && touched.firstName
                    ? errors.firstName
                    : undefined
                }
              />
            </View>

            <View style={{ marginTop: 12 }}>
              <TextInputComponent
                label='Last Name'
                type='text'
                placeholder='Please enter your last name'
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                error={
                  errors.lastName && touched.lastName
                    ? errors.lastName
                    : undefined
                }
              />
            </View>

            <View style={{ marginTop: 12 }}>
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

          {/* signUp button */}
          <View style={{ paddingTop: 24 }}>
            <PrimaryButton
              title='Login'
              disabled={!isValid || !dirty}
              onPress={() => {}}
              bgColor='primary'
              borderColor='primary'
              touchableOpacity={true}
              textColor='onPrimary'
            />
          </View>

          {/* if you have account */}
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
