import Toast from 'react-native-toast-message'

interface ToastProps {
  type: 'success' | 'error' | 'info' | 'warning'
  title?: string
  body: string
}

const showToast = ({ type, title = '', body = '' }: ToastProps) => {
  Toast.show({
    type: type,
    text1: type === 'error' ? 'Something went wrong' : title,
    text2: body
  })
}

export default showToast
