import * as React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSignUp } from '@clerk/clerk-expo'
import { TextInput } from 'react-native-paper'
import { Formik } from 'formik'
import { signUpValidationSchema } from '@/shared/validationSchema'
import TextComponent from '@textComponent'
import PrimaryButton from '@/components/PrimaryButton'

export default function SignUpForm () {
  const { isLoaded, signUp, setActive } = useSignUp()

  const [securePassword, setSecurePassword] = React.useState(true)
  const [pendingVerification, setPendingVerification] = React.useState(false)
  const [code, setCode] = React.useState('')

  const onSignUpPress = async (values: {
    firstName: string
    lastName: string
    email: string
    password: string
  }) => {
    if (!isLoaded) {
      return
    }
    console.log(values)

    // Start the sign-up process using the info the user provided
    try {
      const signUpResult = await signUp.create({
        emailAddress: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName
      })
      console.log('SignUp Result:', signUpResult)

      // Send the user an email with the verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // Display the second form to collect the verification code
      setPendingVerification(true)
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  // Handle the submission of the verification form
  const onPressVerify = async () => {
    if (!isLoaded) {
      return
    }

    // Use the code the user provided to attempt verification
    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code
      })

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId })
        // router.replace('/dashboard')
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2))
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  const handleFormSubmit = async (values: {
    email: string
    password: string
    firstName: string
    lastName: string
  }) => {
    // mutate({ ...values })
    console.log('Form submitted with values:', values)
    onSignUpPress(values)
    // Handle form submission logic here
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
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          lastName: ''
        }}
        validationSchema={signUpValidationSchema}
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
            {!pendingVerification && (
              <View>
                <View style={{ marginTop: 20 }}>
                  <TextInput
                    label='First Name'
                    mode='outlined'
                    inputMode='text'
                    autoCapitalize='none'
                    keyboardType='default'
                    placeholder='Enter your first name'
                    value={values.firstName}
                    onBlur={handleBlur('firstName')}
                    onChangeText={handleChange('firstName')}
                  />
                  {errors.firstName && touched.firstName && (
                    <TextComponent color='red'>
                      {errors.firstName}
                    </TextComponent>
                  )}
                </View>
                <View style={{ marginTop: 20 }}>
                  <TextInput
                    label='Last Name'
                    mode='outlined'
                    inputMode='text'
                    autoCapitalize='none'
                    keyboardType='default'
                    placeholder='Enter your last name'
                    value={values.lastName}
                    onBlur={handleBlur('lastName')}
                    onChangeText={handleChange('lastName')}
                  />
                  {errors.lastName && touched.lastName && (
                    <TextComponent color='red'>{errors.lastName}</TextComponent>
                  )}
                </View>
                <View style={{ marginTop: 20 }}>
                  <TextInput
                    label='Email'
                    mode='outlined'
                    inputMode='email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    value={values.email}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                  />
                  {errors.email && touched.email && (
                    <TextComponent color='red'>{errors.email}</TextComponent>
                  )}
                </View>
                <View style={{ marginTop: 20 }}>
                  <TextInput
                    mode='outlined'
                    label='Password'
                    value={values.password}
                    placeholder='Enter your password'
                    secureTextEntry={securePassword}
                    right={
                      <TextInput.Icon
                        icon={securePassword ? 'eye' : 'eye-off'}
                        onPress={() => {
                          setSecurePassword(!securePassword)
                        }}
                      />
                    }
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                  />
                  {errors.password && touched.password && (
                    <TextComponent color='red'>{errors.password}</TextComponent>
                  )}
                </View>

                <View style={{ paddingTop: 30 }}>
                  <PrimaryButton
                    title='Get Account'
                    disabled={!isValid || !dirty}
                    onPress={handleSubmit}
                    bgColor='primary'
                    borderColor='primary'
                    touchableOpacity={true}
                    textColor='onPrimary'
                  />
                </View>
              </View>
            )}
          </View>
        )}
      </Formik>
      {pendingVerification && (
        <View>
          <View>
            <TextInput
              value={code}
              placeholder='Code...'
              onChangeText={code => setCode(code)}
            />
          </View>
          <TouchableOpacity onPress={onPressVerify}>
            <Text>Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}
