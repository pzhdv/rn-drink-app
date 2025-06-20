import React, { FC } from 'react'
import {
  View,
  KeyboardTypeOptions,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native'

import Colors from '@/constants/Colors'

import CustomText from './CustomText'

interface IProps {
  style?: StyleProp<ViewStyle>
  /**
   *输入框关联的label文字
   */
  label?: string
  /**
   * 输入框占位文本
   */
  placeholder?: string
  /**
   * 输入绑定值
   */
  value?: string
  /**
   * 最大长度
   */
  maxLength?: number
  /**
   * 文本框可输入类型
   */
  keyboardType?: KeyboardTypeOptions
  /**
   * 在 Input 值改变时触发
   * @param newValue 新值
   * @returns
   */
  setValue?: (newValue: string) => void
  /**
   *获得焦点事件
   */
  onFocus?: () => void
  /**
   *失去焦点事件
   */
  onBlur?: () => void
}

const MyTextInput: FC<IProps> = props => {
  return (
    <View style={[styles.formItemWrapper, props.style]}>
      <CustomText style={styles.inputLabel}>{props.label}</CustomText>
      <View style={styles.inputWrapper}>
        <TextInput
          value={props.value}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onChangeText={text => props.setValue && props.setValue(text)}
          style={styles.inputStyle}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.input.placeholderTextColor}
          autoComplete="off"
          returnKeyType="done"
          underlineColorAndroid="transparent"
          maxLength={props.maxLength}
          keyboardType={props.keyboardType}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formItemWrapper: {
    gap: 6,
  },
  inputLabel: {
    color: Colors.text.primary,
    marginBottom: 6,
  },
  inputWrapper: {
    backgroundColor: Colors.input.bg,
    height: 48,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  inputStyle: {
    height: '100%',
    color: Colors.text.primary,
    fontSize: 16,
  },
})
export default MyTextInput
