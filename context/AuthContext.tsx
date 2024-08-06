// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAuthToken, getItem, setItem } from '@storage'

interface AuthContextProps {
  isAuthenticated: boolean | null
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>
  userData: any | null
  setUserData: React.Dispatch<React.SetStateAction<any | null>>
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [userData, setUserData] = useState<any | null>(null)

  useEffect(() => {
    const checkAuthToken = async () => {
      const token = await getAuthToken()
      const storedUserData = await getItem('userData')
      if (storedUserData) {
        const parsedData = JSON.parse(storedUserData)
        setUserData(parsedData)
      } else {
        setUserData(null)
      }
      setIsAuthenticated(!!token)
    }

    checkAuthToken()
  }, [])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
