import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useTheme } from 'react-native-paper'
import { Image } from 'expo-image'
import TextComponent from '@textComponent'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'
import showToast from '@/shared/ShowToast'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { setItem } from '@/constants/Storage'
import PrimaryButton from '@/components/PrimaryButton'

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
        marginTop: 90,
        position: 'relative',
        width: '100%',
        height: 375,
        padding: 18,
        borderRadius: 24,
        backgroundColor: 'white',
        shadowColor: '#00000040',
        shadowOffset: {
          width: 0,
          height: 6
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12
      }}
    >
      <View
        style={{
          position: 'relative',
          alignItems: 'center',
          top: -100
          // paddingBottom: -600,
        }}
      >
        {/* image */}
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: '#fff',
            borderRadius: 100,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 6
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12
          }}
        >
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
          {/* <TouchableOpacity
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
          </TouchableOpacity> */}
        </View>

        {/* two buttons for picture */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 16
          }}
        >
          <PrimaryButton
            title='setting.change-picture'
            style={{
              paddingHorizontal: 10,
              paddingVertical: 6,
              justifyContent: 'center'
            }}
            icon='square-edit-outline'
            loading={isLoading}
            // disabled={!isValid || !dirty || isPending}
            onPress={pickImage}
            bgColor='primary'
            borderColor='primary'
            touchableOpacity={true}
            textColor='textPrimary'
          />
          <PrimaryButton
            style={{
              paddingHorizontal: 10,
              paddingVertical: 6,
              justifyContent: 'center'
            }}
            title='setting.remove-picture'
            loading={isLoading}
            icon='delete-outline'
            // disabled={!isValid || !dirty || isPending}
            onPress={() => {}}
            bgColor='primary'
            borderColor='primary'
            touchableOpacity={true}
            textColor='textPrimary'
          />
        </View>

        <View
          style={{
            width: '100%',
            marginTop: 28,
            gap: 16
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <MaterialCommunityIcons name='account' size={24} color='black' />
            <TextComponent
              fontFamily='Roboto-Regular-400'
              size='titleLarge'
              color='textPrimaryColor'
              style={{ marginStart: 6 }}
            >
              {userData?.applicant?.first_name} {userData?.applicant?.last_name}
            </TextComponent>
          </View>
          {/* email */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <MaterialCommunityIcons name='email' size={24} color='black' />
            <TextComponent
              fontFamily='Roboto-Regular-400'
              size='titleLarge'
              color='textPrimaryColor'
              style={{ marginStart: 6 }}
            >
              {userData?.applicant?.email}
            </TextComponent>
          </View>
          {/* phone */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <MaterialCommunityIcons name='cellphone' size={24} color='black' />
            <TextComponent
              fontFamily='Roboto-Regular-400'
              size='titleLarge'
              color='textPrimaryColor'
              style={{ marginStart: 6 }}
            >
              966 123456789
            </TextComponent>
          </View>
          {/* edit personal details button */}
          <View style={{ marginTop: 10 }}>
            <PrimaryButton
              title='setting.edit-profile'
              icon='square-edit-outline'
              loading={false}
              disabled={false}
              onPress={() => {}}
              bgColor='primary'
              borderColor='primary'
              touchableOpacity={true}
              textColor='textPrimary'
            />
          </View>
        </View>
      </View>
    </View>
  )
}
