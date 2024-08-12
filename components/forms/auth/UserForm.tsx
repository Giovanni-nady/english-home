import {
  I18nManager,
  Image,
  Platform,
  Text,
  useColorScheme,
  View
} from 'react-native'
import React, { useState } from 'react'
import TextInputComponent from '@textInputComponent'
import PrimaryButton from '@primaryButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { editValidationSchema, signUpValidationSchema } from '@schemas'
import { Formik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { governorateList } from '@/shared/api/auth'
import TextComponent from '@textComponent'
import { Picker } from '@react-native-picker/picker'
import { ActivityIndicator, useTheme } from 'react-native-paper'
import axios from 'axios'
import showToast from '@/shared/ShowToast'
import { useAuth } from '@/context/AuthContext'
import { setItem } from '@/constants/Storage'

const exampleImageUri = Image.resolveAssetSource(
  require('./../../../assets/images/default-image.jpeg')
).uri

interface UserFormProps {
  initialValues: {
    first_name: string
    last_name: string
    address: string
    governorate_id: string
    email?: string
    phone: string
    password?: string
    confirmPassword?: string
    avatar?: string
  }
  mode?: 'signUp' | 'edit'
}

const UserForm: React.FC<UserFormProps> = ({
  initialValues,
  mode = 'signUp'
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const { t } = useTranslation()
  const colorScheme = useColorScheme()
  const theme = useTheme()
  const { setUserData, userData } = useAuth()
  const [isPending, setIsPending] = useState(false)
  const modeMargin = mode === 'signUp' ? 20 : 0

  const { data: governorates, isLoading } = useQuery({
    queryKey: ['governorates'],
    queryFn: governorateList
  })
  // console.log(JSON.stringify(governorates, null, 2))

  const handleFormSubmit = async (values: typeof initialValues) => {
    setIsPending(true)
    const formData = new FormData()
    formData.append('first_name', values.first_name)
    formData.append('last_name', values.last_name)
    formData.append('phone', values.phone.toString())
    formData.append('address', values.address)
    formData.append('governorate_id', values.governorate_id.toString())
    formData.append('email', values.email!)
    if (mode === 'signUp') {
      formData.append('password', values.password!)

      // const imageFile = {
      //   uri: exampleImageUri,
      //   type: 'image/jpeg',
      //   name: 'default-image.jpeg'
      // }

      // formData.append('avatar', imageFile as any)
    } else {
      formData.append('_method', 'PUT')
    }

    console.log('Sending data:', formData)

    try {
      let url = ''
      const headers: any = {
        'Content-Type': 'multipart/form-data'
      }

      if (mode === 'signUp')
        url = `${process.env.EXPO_PUBLIC_API_BASE_URL}/register`
      else {
        url = `${process.env.EXPO_PUBLIC_API_BASE_URL}/update`
        headers.Authorization = `Bearer ${userData.token}`
      }

      console.log('URL:', url)
      console.log('Headers:', headers)

      const response = await axios.post(url, formData, {
        headers
      })

      console.log('API response:', response)

      setIsPending(false)

      if (mode === 'signUp') {
        showToast({
          type: 'success',
          title: 'Account Created',
          body: 'Your account is ready! Please log in with your new account.'
        })
        navigation.reset({
          index: 0,
          routes: [{ name: 'Auth', params: { screen: 'Login' } }]
        })
      } else {
        const updatedUserData = {
          ...userData,
          applicant: {
            ...userData.applicant,
            first_name: values.first_name,
            last_name: values.last_name,
            address: values.address,
            governorate_id: values.governorate_id,
            phone: values.phone
          }
        }

        console.log('updatedUserData', JSON.stringify(updatedUserData, null, 2))

        setUserData(updatedUserData)
        setItem('userData', JSON.stringify(updatedUserData))

        showToast({
          type: 'success',
          title: 'Profile Updated',
          body: 'Your profile has been successfully updated.'
        })
        navigation.goBack()
      }
    } catch (error) {
      setIsPending(false)
      // Log the error details
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
        console.error('Error message:', error)
      }

      // Optional: log entire error object
      console.error('Complete error object:', JSON.stringify(error, null, 2))
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={
        mode === 'signUp' ? signUpValidationSchema : editValidationSchema
      }
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
            <Text>{JSON.stringify(process.env.API_BASE_URL)}</Text>
            {/* first name */}
            <View style={{ marginTop: modeMargin }}>
              <TextInputComponent
                label={'register.firstName'}
                type='text'
                placeholder={t('register.firstNamePlaceholder')}
                value={values.first_name}
                onChangeText={handleChange('first_name')}
                onBlur={handleBlur('first_name')}
                error={
                  errors.first_name && touched.first_name
                    ? errors.first_name
                    : undefined
                }
              />
            </View>

            {/* last name */}
            <View style={{ marginTop: 12 }}>
              <TextInputComponent
                label={'register.lastName'}
                type='text'
                placeholder={t('register.lastNamePlaceholder')}
                value={values.last_name}
                onChangeText={handleChange('last_name')}
                onBlur={handleBlur('last_name')}
                error={
                  errors.last_name && touched.last_name
                    ? errors.last_name
                    : undefined
                }
              />
            </View>

            {/* <View style={{ flexDirection: 'row', marginTop: 12, gap: 8 }}> */}
            {/* address */}
            <View style={{ flex: 1, marginTop: 12 }}>
              <TextInputComponent
                label={'register.address'}
                type='text'
                placeholder={t('register.addressPlaceholder')}
                value={values.address}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                error={
                  errors.address && touched.address ? errors.address : undefined
                }
              />
            </View>

            {/* governorate_id */}
            <View style={{ flex: 1, marginTop: 12 }}>
              <TextComponent
                style={{ marginVertical: 12 }}
                size='titleMedium'
                fontFamily='Roboto-Regular-400'
                color='dark'
              >
                {t('register.governorate')}
              </TextComponent>
              <View
                style={{
                  width: '100%',
                  borderWidth: 1,
                  borderRadius: 100,
                  borderColor: colorScheme === 'dark' ? '#E5E5E3' : '#331D2C',
                  overflow: 'hidden'
                }}
              >
                {isLoading ? (
                  <View>
                    <ActivityIndicator
                      style={{ padding: 18, backgroundColor: 'white' }}
                    />
                  </View>
                ) : (
                  <Picker
                    style={{
                      width: '100%',
                      borderWidth: 1,
                      padding: 29,
                      borderRadius: 100,
                      color: colorScheme === 'dark' ? 'white' : '#331D2C',
                      backgroundColor: theme.colors.onSecondary,
                      fontSize: 17,
                      textAlign: I18nManager?.isRTL ? 'right' : 'left'
                    }}
                    selectedValue={values.governorate_id}
                    onValueChange={handleChange('governorate_id')}
                    onBlur={handleBlur('governorate_id')}
                  >
                    {governorates?.governorates?.map((gov: any) => (
                      <Picker.Item
                        key={gov.id}
                        label={gov.name}
                        value={gov.id.toString()}
                      />
                    ))}
                  </Picker>
                )}
              </View>

              {errors.governorate_id && touched.governorate_id && (
                <TextComponent style={{ color: 'red' }}>
                  {errors.governorate_id}
                </TextComponent>
              )}
            </View>
            {/* </View> */}

            {/* phone */}
            <View style={{ marginTop: 12 }}>
              <TextInputComponent
                label='register.phone'
                type='text'
                placeholder={t('register.phonePlaceholder')}
                value={values.phone}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                error={errors.phone && touched.phone ? errors.phone : undefined}
              />
            </View>

            {mode === 'signUp' && (
              <>
                {/* email */}
                <View style={{ marginTop: 12 }}>
                  <TextInputComponent
                    label='register.email'
                    type='email'
                    placeholder={t('register.emailPlaceholder')}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    error={
                      errors.email && touched.email ? errors.email : undefined
                    }
                  />
                </View>
                {/* password */}
                <View style={{ marginTop: 12 }}>
                  <TextInputComponent
                    label='register.password'
                    secure
                    placeholder={t('register.passwordPlaceholder')}
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
                {/* confirm password */}
                <View style={{ marginTop: 12 }}>
                  <TextInputComponent
                    label='register.confirmPassword'
                    placeholder={t('register.confirmPasswordPlaceholder')}
                    secure
                    value={values.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    error={
                      errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : undefined
                    }
                  />
                </View>
              </>
            )}
          </View>

          {/* signUp button */}
          <View style={{ paddingTop: 28 }}>
            <PrimaryButton
              title={
                mode === 'signUp' ? 'register.button' : 'setting.save-changes'
              }
              loading={isPending}
              disabled={!isValid || !dirty || isPending}
              onPress={handleSubmit}
              bgColor='primary'
              borderColor='primary'
              touchableOpacity={true}
              textColor='textPrimary'
            />
          </View>
        </View>
      )}
    </Formik>
  )
}

export default UserForm
