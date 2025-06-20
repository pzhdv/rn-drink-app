import React, { FC } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import Colors from '@/constants/Colors'
import CustomText from './CustomText'

interface IProps {
  /**
   * 文字内容
   */
  text: string
  /**
   * 按下按钮透明状态值
   */
  activeOpacity?: number
  /**
   *
   * @returns 按下按钮事件
   */
  onPress?: () => void
}

const LinkText: FC<IProps> = props => {
  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity}
      onPress={props.onPress}
    >
      <CustomText style={styles.linkText}>{props.text}</CustomText>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  linkText: {
    color: Colors.text.link,
  },
})
export default LinkText
