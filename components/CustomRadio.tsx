import { View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React, { FC } from 'react'

interface IPros {
  /**
   * 选中状态
   */
  checked?: boolean
  /**
   *点击事件
   */
  onPress?: () => void
  /**
   * 按钮大小 默认20
   */
  size?: number
  /**
   * 实心圆与外框的间距 默认3
   */
  innerMargin?: number
  /**
   * 按钮的间距 默认4
   */
  margin?: number
  /**
   * 按钮边框大小 默认2
   */
  borderWidth?: number
  /**
   * 选中时按钮边框颜色 默认：'#2B9F93'
   */
  checkedBorderColor?: string
  /**
   * 未选中时按钮边框颜色 默认：#909399
   */
  uncheckedBorderColor?: string
  /**
   * 按钮背景颜色 默认 #fff
   */
  backgroundColor?: string
  /**
   * 选择填充的颜色 即内圆背景 默认：#2B9F93
   */
  checkedFillColor?: string
  /**
   * 未选择填充的颜色 即内圆背景  默认：#fff
   */
  uncheckedFillColor?: string
  /**
   * 按钮盒子样式
   */
  style?: StyleProp<ViewStyle>
}

const CustomRadio: FC<IPros> = ({
  checked,
  size,
  innerMargin,
  margin,
  borderWidth,
  checkedBorderColor,
  uncheckedBorderColor,
  backgroundColor,
  checkedFillColor,
  uncheckedFillColor,
  onPress,
  style,
}) => {
  const defaultPros = {
    size: 20,
    innerMargin: 3,
    margin: 4,
    borderWidth: 2,
    checkedBorderColor: '#2B9F93',
    uncheckedBorderColor: '#909399',
    backgroundColor: '#fff',
    checkedFillColor: '#2B9F93',
    uncheckedFillColor: '#fff',
  }

  const borderColor = checked
    ? checkedBorderColor || defaultPros.checkedBorderColor
    : uncheckedBorderColor || defaultPros.uncheckedBorderColor
  const circleFillColor = checked
    ? checkedFillColor || defaultPros.checkedFillColor
    : uncheckedFillColor || defaultPros.uncheckedFillColor
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={style}>
      <View
        style={{
          width: size || defaultPros.size,
          height: defaultPros.size,
          margin: margin || defaultPros.margin,
          borderWidth: borderWidth || defaultPros.borderWidth,
          borderColor: borderColor,
          backgroundColor: backgroundColor || defaultPros.backgroundColor,
          borderRadius: '50%',
        }}
      >
        <View
          style={{
            flex: 1,
            borderRadius: '50%',
            backgroundColor: circleFillColor,
            margin: innerMargin || defaultPros.innerMargin,
          }}
        ></View>
      </View>
    </TouchableOpacity>
  )
}

export default CustomRadio
