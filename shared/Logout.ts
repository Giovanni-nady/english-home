import { useNavigation } from '@react-navigation/native'
import { removeAuthToken } from '@storage'
import { useAuth } from '../context/AuthContext'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import axios from 'axios'

const useLogout = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const { setIsAuthenticated, userData } = useAuth()

  const handleLogout = async () => {
    try {
      const url = `${process.env.EXPO_PUBLIC_API_BASE_URL}/logout`
      const headers = {
        Authorization: `Bearer ${userData.token}`,
        'Content-Type': 'application/json'
      }

      const response = await axios.post(url, {}, { headers })
      console.log('response.data', response.data)

      await removeAuthToken()
      setIsAuthenticated(false)
      navigation.reset({
        index: 0,
        routes: [{ name: 'Auth' }]
      })
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  return handleLogout
}

export default useLogout

// {
//   /* <Button
//               title='logout show onboarding'
//               onPress={async () => {
//                 await removeAuthToken()
//                 setIsAuthenticated(false)
//                 await removeItem('onboarding')
//                 navigation.reset({
//                   index: 0,
//                   routes: [{ name: 'OnBoarding' }]
//                 })
//               }}
//             /> */
// }
