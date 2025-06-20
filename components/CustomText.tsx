import React from 'react'
import { Text, TextProps } from 'react-native'

type FontType = 'Semibold' | 'Regular' | 'Medium'
interface IProps extends TextProps {
  /**
   * 默认 Regular
   */
  fontFamily?: FontType
}

// 字体对象
const PingFangFont = {
  Semibold: 'PingFang-SC-Semibold',
  Regular: 'PingFang-SC-Regular',
  Medium: 'PingFang-SC-Medium',
}

/**
 * 自定义字体，设置默认字体样式
 */

const CustomText: React.FC<IProps> = props => {
  const fontFamily = props.fontFamily || 'Regular'
  return (
    <Text
      {...props}
      style={[{ fontFamily: PingFangFont[fontFamily] }, props.style]}
    />
  )
}

export default CustomText
