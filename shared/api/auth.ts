import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Define your API base URL
const API_BASE_URL = 'https://your-api-url.com'

// Interface for login payload
interface LoginPayload {
  email: string
  password: string
}

// Interface for signup payload
interface SignupPayload {
  name: string
  email: string
  password: string
  confirmPassword: string
}

// Define the login API call
export const login = async (payload: LoginPayload) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, payload)
  return response.data
}

// Define the signup API call
export const signup = async (payload: SignupPayload) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signup`, payload)
  return response.data
}

// Custom hook for login
// export const useLogin = () => {
//   const queryClient = useQueryClient()

//   return useMutation(login, {
//     onSuccess: data => {
//       // Update query cache or perform other side effects here
//       queryClient.invalidateQueries('user')
//     },
//     onError: error => {
//       // Handle error here
//       console.error('Login failed', error)
//     }
//   })
// }

// // Custom hook for signup
// export const useSignup = () => {
//   const queryClient = useQueryClient()

//   return useMutation(signup, {
//     onSuccess: data => {
//       // Update query cache or perform other side effects here
//       queryClient.invalidateQueries('user')
//     },
//     onError: error => {
//       // Handle error here
//       console.error('Signup failed', error)
//     }
//   })
// }
