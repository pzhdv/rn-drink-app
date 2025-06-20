import React, { FC, useState } from 'react'
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import Colors from '@/constants/Colors'

import IconFont from './IconFont'

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
   * 在 Input 值改变时触发
   * @param newValue 新值
   * @returns
   */
  setValue?: (newValue: string | undefined) => void
  /**
   *获得焦点事件
   */
  onFocus?: () => void
  /**
   *失去焦点事件
   */
  onBlur?: () => void
}

const MyPasswordInput: FC<IProps> = props => {
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(true) // 密码是否可见

  return (
    <View style={[styles.formItemWrapper, props.style]}>
      <Text style={styles.inputLabel}>{props.label}</Text>
      <View style={styles.passwordWrapper}>
        <TextInput
          value={props.value}
          onChangeText={value => props.setValue && props.setValue(value)}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          secureTextEntry={passwordIsVisible}
          style={styles.inputStyle}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.input.placeholderTextColor}
          autoComplete="off"
          returnKeyType="done"
          underlineColorAndroid="transparent"
          keyboardType="ascii-capable" // ascii-capable：非中文输入
        />
        <TouchableOpacity onPress={() => setPasswordIsVisible(pre => !pre)}>
          <IconFont
            name={passwordIsVisible ? 'yincangbukejian' : 'yanjing_xianshi'}
            size={24}
            color={Colors.input.placeholderTextColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formItemWrapper: {
    gap: 6,
  },

  inputLabel: {
    fontFamily: 'PingFang-SC-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: Colors.text.primary,
  },

  passwordWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: Colors.input.bg,
    borderRadius: 8,
    height: 48,
  },

  inputStyle: {
    flex: 1,
    paddingVertical: 12,
    color: Colors.text.primary,
    fontSize: 16,
  },
})
export default MyPasswordInput
