import React, { useState } from 'react'
import { Platform, View } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import TextInputComponent from '@textInputComponent'
import PrimaryButton from '@primaryButton'
import { useTranslation } from 'react-i18next'
import TextComponent from '@textComponent'
import { ChangePasswordValidationSchema } from '@/shared/validationSchema'
import { useAuth } from '@/context/AuthContext'
import axios from 'axios'
import showToast from '@/shared/ShowToast'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const ChangePasswordForm = () => {
  const { t } = useTranslation()
  const { userData } = useAuth()
  const [isPending, setIsPending] = useState(false)
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const handleFormSubmit = async (values: { password: string }) => {
    setIsPending(true)
    const formData = new FormData()
    formData.append('first_name', userData.applicant.first_name)
    formData.append('last_name', userData.applicant.last_name)
    formData.append('phone', userData.applicant.phone.toString())
    formData.append('address', userData.applicant.address)
    formData.append(
      'governorate_id',
      userData.applicant.governorate_id.toString()
    )
    formData.append('email', userData.applicant.email!)
    formData.append('password', values.password)
    formData.append('_method', 'PUT')

    // Handle form submission logic here
    console.log('Form submitted with values:', formData)
    try {
      let url = `${process.env.EXPO_PUBLIC_API_BASE_URL}/update`
      const headers: any = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${userData.token}`
      }

      await axios.post(url, formData, {
        headers
      })

      setIsPending(false)
      showToast({
        type: 'success',
        title: 'Password Changed',
        body: 'Your password has been changed successfully.'
      })
      navigation.goBack()
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
      initialValues={{ password: '', confirmPassword: '' }}
      validationSchema={ChangePasswordValidationSchema}
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
        <View style={{ flexGrow: 1 }}>
          {/* Password */}
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

          {/* Confirm Password */}
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

          {/* Submit Button */}
          <View style={{ marginTop: 'auto', marginBottom: 20 }}>
            <PrimaryButton
              title={t('setting.save')}
              onPress={handleSubmit}
              loading={isPending}
              disabled={
                !isValid ||
                !dirty ||
                isPending ||
                !values.password ||
                !values.confirmPassword ||
                Object.keys(errors).length > 0
              }
              bgColor='primary'
              borderColor='primary'
              touchableOpacity={true}
              textColor='onPrimary'
              style={{marginBottom:Platform.OS === 'ios' ? 20 : 0}}
            />
          </View>
        </View>
      )}
    </Formik>
  )
}

export default ChangePasswordForm
