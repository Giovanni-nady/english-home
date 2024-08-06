import { View, Text } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '@primaryButton'
import OTPTextView from 'react-native-otp-textinput'
import { useTheme } from 'react-native-paper'

export default function OTPForm () {
  const theme = useTheme()
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [otp, setOtp] = useState('')

  const handleTextChange = (text: string) => {
    // Allow only numbers
    const numericText = text.replace(/[^0-9]/g, '')
    setOtp(numericText)

    // Enable button if OTP length is 6, otherwise disable
    if (numericText.length === 6) {
      setIsButtonDisabled(false)
    } else {
      setIsButtonDisabled(true)
    }
  }

  return (
    <>
      {/* otp */}
      <OTPTextView
        containerStyle={{ marginTop: 20 }}
        autoFocus={true}
        textInputStyle={{
          borderRadius: 100,
          borderWidth: 4,
          backgroundColor: '#fff'
        }}
        tintColor={theme.colors.primary}
        inputCount={6}
        offTintColor={[
          '#E5E5E3',
          '#E5E5E3',
          '#E5E5E3',
          '#E5E5E3',
          '#E5E5E3',
          '#E5E5E3'
        ]}
        handleTextChange={handleTextChange}
      />

      {/* button */}
      <View style={{ paddingTop: 24 }}>
        <PrimaryButton
          title='forgetPassword.confirm'
          loading={!isButtonDisabled}
          disabled={isButtonDisabled}
          onPress={() => {}}
          bgColor='primary'
          borderColor='primary'
          touchableOpacity={true}
          textColor='onPrimary'
        />
      </View>
    </>
  )
}
