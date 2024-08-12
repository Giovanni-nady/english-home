import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'react-native-paper'
import { MD3Colors } from 'react-native-paper/lib/typescript/types'
import { StatusBar } from 'expo-status-bar'

interface SafeAreaViewLayoutProps {
  children: React.ReactNode
  backgroundColor?: string
  translucent?: boolean
  statusContentStyle?: 'light' | 'dark'
}

const SafeAreaViewLayout: React.FC<SafeAreaViewLayoutProps> = ({
  children,
  backgroundColor,
  translucent= false,
  statusContentStyle = 'light'
}) => {
  const theme = useTheme()
  const bgColor = (theme.colors[backgroundColor as keyof MD3Colors] ||
    backgroundColor) as string

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: bgColor
      }}
    >

      <StatusBar
        style={statusContentStyle}
        backgroundColor={'transparent'}
        translucent={translucent}
        hidden={false}
        animated={true}
      />
      {children}
    </SafeAreaView>
  )
}

export default SafeAreaViewLayout
