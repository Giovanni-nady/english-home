import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import TextComponent from '@textComponent'
import TextInputComponent from '@textInputComponent'
import PrimaryButton from '@primaryButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { loginValidationSchema } from '@schemas'
import { Formik } from 'formik'
import { setAuthToken, setItem } from '@storage'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@tanstack/react-query'
import { login } from '@/shared/api/auth'
import { useAuth } from '@/context/AuthContext'
import showToast from '@/shared/ShowToast'
import axios from 'axios'

export default function LoginForm () {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const { t } = useTranslation()
  const { setIsAuthenticated, setUserData } = useAuth()

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onMutate: variables => {
      // A mutation is about to happen!
      // Optionally return a context containing data to use when for example rolling back
      // return { id: 1 }
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log(error)
      if (axios.isAxiosError(error)) {
        console.error('Error response:', error.response?.data)
        console.error('Error status:', error.response?.status)
        console.error('Error headers:', error.response?.headers)
        const errorMessage =
          error.response?.data?.errors ||
          error.response?.data?.message ||
          'An error occurred'

        showToast({
          type: 'error',
          title: 'Something went wrong',
          body: errorMessage
        })
      } else {
        console.error('Error message:', error?.message)
      }

      console.log(`rolling back optimistic update with id {context.id}`)
    },
    onSuccess: (data, variables, context) => {
      console.log(JSON.stringify(data, null, 2))
      setIsAuthenticated(true)
      setItem('userData', JSON.stringify(data))
      setAuthToken(data.token)
      setUserData(data)
      navigation.reset({
        index: 0,
        routes: [{ name: 'App', params: { screen: 'Home' } }]
      })

      // Boom
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    }
  })

  const handleFormSubmit = async (values: {
    email: string
    password: string
  }) => {
    mutate({ ...values })

    // Handle form submission logic here
    console.log('Form submitted with values:', values)
    // await setAuthToken('token')
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'App', params: { screen: 'Home' } }]
    // })

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
                label='login.email'
                type='email'
                placeholder={t('login.emailPlaceholder')}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email && touched.email ? errors.email : undefined}
              />
            </View>

            <View style={{ marginTop: 12 }}>
              <TextInputComponent
                label='login.password'
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

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}
            >
              <TextComponent
                size='titleMedium'
                fontFamily='Roboto-Regular-400'
                color='dark'
              >
                {t('login.forgotPassword')}
              </TextComponent>
            </TouchableOpacity>
          </View>

          {/* submit button */}
          <View style={{ paddingTop: 26, gap: 18 }}>
            <PrimaryButton
              title='login.button'
              loading={isPending}
              disabled={!isValid || !dirty || isPending}
              onPress={handleSubmit}
              bgColor='primary'
              borderColor='primary'
              touchableOpacity={true}
              textColor='textPrimary'
            />
            <PrimaryButton
              title='login.guest'
              // loading={isPending}
              // disabled={!isValid || !dirty || isPending}
              onPress={() => {
                setIsAuthenticated(true)
                setItem('userData', JSON.stringify({}))
                setAuthToken('data.token')
                setUserData({})
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'App', params: { screen: 'Home' } }]
                })
              }}
              bgColor='primary'
              borderColor='primary'
              touchableOpacity={true}
              textColor='textPrimary'
            />
          </View>

          {/* navigate to signUp */}
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
              {t('login.noAccount')}
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
                {t('login.registerNow')}
              </TextComponent>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  )
}
