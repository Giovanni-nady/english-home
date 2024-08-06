import { AntDesign } from '@expo/vector-icons'
import TextComponent from '@textComponent'
// import { Colors, Sizes } from '@constants'
import React from 'react'
// import { maskHiddenString } from '@utils/stringUtils'
import { I18nManager, TouchableOpacity, View } from 'react-native'
// import clsx from 'clsx'

export default function SingleOptionItem ({
  title,
  description,
  Icon,
  onClick,
  textClassName
}: {
  title: string
  description?: string
  Icon: any
  textClassName?: string
  onClick: () => void
}) {
  const isRtl = I18nManager.isRTL

  const arrowIconProps = {
    height: 20,
    width: 20
  }

  return (
    <TouchableOpacity
      style={{
        padding: 8,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
      }}
      onPress={onClick}
    >
      <View style={{ padding: 8 }}>{Icon}</View>
      <View
        style={{
          flexDirection: 'column',
          marginHorizontal: 4,
          width: '70%'
          //   justifyContent: 'center'
        }}
      >
        <TextComponent
          color='dark'
          style={{ flexDirection: 'row', alignItems: 'flex-start' }}
        >
          {title}
        </TextComponent>
        {/* {onDescriptionProvided()} */}
      </View>
      <View style={{ marginStart: 'auto' }}>
        {isRtl ? (
          <AntDesign name='left' size={20} color='black' />
        ) : (
          <AntDesign name='right' size={20} color='black' />
        )}
      </View>
    </TouchableOpacity>
  )
}
