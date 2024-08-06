import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Define your API base URL
const API_BASE_URL = 'https://spavation.goldenlynxes.tech/public/api/applicants'

// Interface for login payload
interface LoginPayload {
  email: string
  password: string
}


// Define the login API call
export const login = async (payload: LoginPayload) => {
  const response = await axios.post(`${API_BASE_URL}/login`, payload)
  return response.data
}

// Define the signup API call
export const signUp = async (payload: FormData) => {
  return await axios.post(`${API_BASE_URL}/register`, payload)
}

// Define the edit personal data API call
export const editPersonalData = async (payload: FormData) => {
  return await axios.post(`${API_BASE_URL}/update`, payload)
}

// Define the signup API call
export const governorateList = async () => {
  const response = await axios.get(`${API_BASE_URL}/governorates`)
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
