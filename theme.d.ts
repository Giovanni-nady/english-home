import 'react-native-paper'

declare module 'react-native-paper' {
  interface ThemeColors {
    lightBackground: any
    secondaryBackground: string
    // Add other custom colors here
  }

  interface Theme {
    colors: ThemeColors
  }
}
