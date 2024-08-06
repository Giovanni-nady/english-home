import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useTheme } from 'react-native-paper'
import { Image } from 'expo-image'
import TextComponent from '@textComponent'
import { AntDesign } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'
import showToast from '@/shared/ShowToast'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { setItem } from '@/constants/Storage'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

interface ImageData {
  uri: string
  type: string
  name: string
}

export default function SettingsHeader () {
  const { userData, setUserData } = useAuth()
  const [image, setImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const theme = useTheme()

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    })

    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
      uploadImage(result.assets[0])
    }
  }

  const getMimeType = (filename: string) => {
    const extension = filename.split('.').pop()?.toLowerCase()
    switch (extension) {
      case 'jpg':
      case 'jpeg':
        return 'image/jpeg'
      case 'png':
        return 'image/png'
      default:
        return 'image/jpeg'
    }
  }

  const uploadImage = async (imageData: ImageData) => {
    setIsLoading(true)
    console.log(imageData)
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
    formData.append('_method', 'PUT')

    formData.append('avatar', {
      uri: imageData.uri,
      type: getMimeType(imageData.uri),
      name: imageData.uri.split('/').pop()
    } as any)

    try {
      let url = `${process.env.EXPO_PUBLIC_API_BASE_URL}/update`
      const headers: any = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${userData.token}`
      }

      const response = await axios.post(url, formData, {
        headers
      })
      console.log('response.data', response.data)
      const updatedUserData = {
        ...userData,
        applicant: {
          ...userData.applicant,
          avatar: imageData.uri
        }
      }

      console.log('updatedUserData', JSON.stringify(updatedUserData, null, 2))

      setUserData(updatedUserData)
      setItem('userData', JSON.stringify(updatedUserData))

      setIsLoading(false)
      showToast({
        type: 'success',
        title: 'Profile picture Changed',
        body: 'Your profile picture changed successfully.'
      })
      // navigation.goBack()
    } catch (error) {
      setIsLoading(false)
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
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View
      style={{
        backgroundColor: theme.colors.secondaryBackground,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        padding: 35,
        paddingBottom: 100
      }}
    >
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8
        }}
      >
        <View>
          <Image
            style={{
              width: 150,
              height: 150,
              backgroundColor: '#fff',
              borderRadius: 100
            }}
            source={{
              uri: userData.applicant.avatar
            }}
            placeholder={{ blurhash }}
            contentFit='contain'
            transition={1000}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: -10,
              right: -10,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 100,
              padding: 10,
              margin: 4,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,

              elevation: 6
            }}
            onPress={pickImage}
          >
            <AntDesign name='edit' size={30} color='black' />
          </TouchableOpacity>
        </View>

        <View>
          <TextComponent
            fontFamily='Roboto-Regular-400'
            size='titleLarge'
            color='white'
            align='center'
          >
            {userData?.applicant?.first_name} {userData?.applicant?.last_name}
          </TextComponent>
          <TextComponent
            fontFamily='Roboto-Regular-400'
            size='titleSmall'
            color='white'
            align='center'
          >
            {userData?.applicant?.email}
          </TextComponent>
        </View>
      </View>
    </View>
  )
}
