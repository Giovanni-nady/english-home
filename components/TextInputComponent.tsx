import React, { useState } from 'react'
import {
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
  I18nManager
} from 'react-native'
import { useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import TextComponent from '@textComponent'
import { useTranslation } from 'react-i18next'

interface TextInputComponentProps extends TextInputProps {
  label: string
  type?: 'email' | 'numeric' | 'text' | 'search' | 'url'
  secure?: boolean
  error?: string | undefined
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  type = 'text',
  label,
  secure = false,
  error,
  style,
  ...rest
}) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const getKeyboardType = () => {
    switch (type) {
      case 'email':
        return 'email-address'
      case 'numeric':
        return 'number-pad'
      case 'search':
        return 'default'
      case 'url':
        return 'url'
      case 'text':
        return 'default'
      default:
        return 'default'
    }
  }

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <View style={styles.container}>
      <TextComponent
        style={{ marginVertical: 12 }}
        size='titleMedium'
        fontFamily='Roboto-Regular-400'
        color='dark'
      >
        {t(label)}
      </TextComponent>
      <View style={styles.subContainer}>
        <TextInput
          placeholderTextColor={'#BBBBBB'}
          autoCapitalize='none'
          autoCorrect={false}
          inputMode={type}
          keyboardType={getKeyboardType()}
          style={[
            styles.input,
            {
              color: theme.colors.inputPrimary,
              backgroundColor: theme.colors.onSecondary,
              borderColor: theme.colors.borderSecondaryColor,
              fontSize: 17
            },
            style
          ]}
          secureTextEntry={secure && !isPasswordVisible}
          {...rest}
        />
        {secure && (
          <TouchableOpacity style={styles.icon} onPress={handlePasswordToggle}>
            <MaterialCommunityIcons
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={24}
              color='#BBBBBB'
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <TextComponent
          size='titleMedium'
          fontFamily='Roboto-Regular-400'
          style={styles.errorText}
          color='red'
        >
          {error}
        </TextComponent>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 16,
    borderRadius: 100,
    textAlign: I18nManager?.isRTL ? 'right' : 'left'
  },
  icon: {
    position: 'absolute',
    right: 20
  },
  errorText: {
    marginTop: 6
  }
})

export default TextInputComponent
