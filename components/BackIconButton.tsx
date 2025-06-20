import React, { FC } from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import { router } from 'expo-router'

import Colors from '@/constants/Colors'

import IconFont from './IconFont'

interface IProps {
  style?: StyleProp<ViewStyle>
}

const BackIconButton: FC<IProps> = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={props.style}
      onPress={() => router.back()}
    >
      <IconFont name="ico-left-arrow" size={20} color={Colors.text.primary} />
    </TouchableOpacity>
  )
}

export default BackIconButton
