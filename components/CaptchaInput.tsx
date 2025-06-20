import React, { FC, useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardTypeOptions,
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
  label: string
  /**
   * 输入框占位文本
   */
  placeholder: string | undefined
  /**
   * 输入绑定值
   */
  value: string | undefined
  /**
   * 最大长度
   */
  maxLength?: number | undefined
  /**
   * 是否禁用、取决于账号或手机号格式是否有误
   */
  isDisable: boolean
  /**
   * 文本框可输入类型
   */
  keyboardType?: KeyboardTypeOptions | undefined
  /**
   * 在 Input 值改变时触发
   * @param newValue 新值
   * @returns
   */
  setValue: (newValue: string | undefined) => void
  /**
   * 获取验证码按钮事件
   * @returns
   */
  onGetVerificationCodeMethod: () => void
}

// 获取验证码输入框组件
const CaptchaInput: FC<IProps> = props => {
  // 使用 ReturnType 获取 setInterval 的返回类型
  const timerId = useRef<ReturnType<typeof setInterval> | null>(null)
  const [isShowBtn, setIsShowBtn] = useState<boolean>(true)
  const [countdownText, setCountdownText] = useState<string>('') //倒计时文本

  useEffect(() => {
    return () => {
      clearTimerInterval()
    }
  }, [])

  // 清除定时器
  const clearTimerInterval = () => {
    console.log('清除定时器')
    if (timerId.current) {
      clearInterval(timerId.current)
      timerId.current = null
      setIsShowBtn(true) //显示获取验证码按钮
    }
  }
  /**
   * 获取验证码
   */
  const getVerificationCode = () => {
    console.log('getVerificationCode')
    props.onGetVerificationCodeMethod()
    let seconds = 59
    clearTimerInterval() //清楚定时器
    setCountdownText(`${seconds}s后重新获取`)
    setIsShowBtn(false) //隐藏获取验证码按钮
    timerId.current = setInterval(() => {
      seconds = seconds - 1
      if (seconds <= 0 && timerId.current) {
        clearTimerInterval()
      } else {
        setCountdownText(`${seconds}s后重新获取`)
      }
    }, 1000)
  }

  //渲染按钮或文本
  const renderButtonOrText = () => {
    return isShowBtn ? (
      <TouchableOpacity
        onPress={getVerificationCode}
        disabled={props.isDisable}
        style={styles.linkBtnWrapper}
      >
        <CustomText style={[styles.linkText, { color: Colors.text.link }]}>
          获取验证码
        </CustomText>
      </TouchableOpacity>
    ) : (
      <CustomText style={[styles.linkText, { color: Colors.text.primary }]}>
        {countdownText}
      </CustomText>
    )
  }
  return (
    <View style={[styles.formItemWrapper, props.style]}>
      <CustomText style={styles.inputLabel}>{props.label}</CustomText>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={Colors.input.placeholderTextColor}
          style={styles.inputStyle}
          value={props.value}
          onChangeText={text => props.setValue(text)}
          autoComplete="off"
          returnKeyType="done"
          maxLength={props.maxLength}
          underlineColorAndroid="transparent"
          keyboardType={props.keyboardType}
          editable={!props.isDisable}
        />
        {renderButtonOrText()}
      </View>
    </View>
  )
}

export default CaptchaInput

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    height: '100%',
    color: Colors.text.primary,
    fontSize: 16,
  },
  linkBtnWrapper: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  linkText: {
    fontSize: 12,
    lineHeight: 20,
  },
})
