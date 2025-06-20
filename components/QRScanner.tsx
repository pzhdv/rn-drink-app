import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'

import Colors from '@/constants/Colors'

import IconFont from './IconFont'

interface IProps {
  /**
   * 图标大小 默认20
   */
  size?: number
  /**
   *按下事件
   */
  onPress?: () => void
}
// 扫一扫组件
const QRScanner: FC<IProps> = props => {
  const iconSize = props.size || 20
  return (
    <TouchableOpacity activeOpacity={1} onPress={props.onPress}>
      <IconFont name="saoyisao" size={iconSize} color={Colors.text.primary} />
    </TouchableOpacity>
  )
}

export default QRScanner
