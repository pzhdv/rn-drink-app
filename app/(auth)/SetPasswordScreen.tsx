import React, { useEffect, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Colors from '@/constants/Colors'

import LeftArrowButton from '@/components/LeftArrowButton'
import CustomText from '@/components/CustomText'
import MyPasswordInput from '@/components/MyPasswordInput'
import BigButton from '@/components/BigButton'
import ErrorText from '@/components/ErrorText'

export default function SetPasswordScreen() {
  const params = useLocalSearchParams<{
    userPhoneNumber: string
    operationType: string
  }>()

  const [password, setPassword] = useState<string>()
  const [confirmPassword, setConfirmPassword] = useState<string>()
  const [errorText, setErrorText] = useState<string>()
  // 登录按钮禁用状态
  const nextBtnIsDisabled = useMemo(() => {
    return !(password && confirmPassword)
  }, [confirmPassword, password])

  const titleText = '设置新密码'
  const subTitleText = '这里设置您的新密码'

  useEffect(() => {
    setErrorText('')
  }, [password, confirmPassword])

  //  ! 下一步
  const handleNextSetup = () => {
    console.log('处理下一步')

    if (password !== confirmPassword) {
      setErrorText('两次密码不一致')
      return false
    }
    handleRegisterUser()
  }
  // todo 调用接口 注册用户
  const handleRegisterUser = async () => {
    try {
      const userPhoneNumber = params.userPhoneNumber
      console.log(`手机号:${userPhoneNumber}设置密码成功 密码：${password}`)
      const resisterUserAPI = async () => {}
      await resisterUserAPI()
      // 跳转密码设置成功页面
      router.replace({
        pathname: '/SetPwdSuccessScreen',
        params: {
          operationType: params.operationType,
        },
      })
    } catch (error) {
      console.log('error', error)
      setErrorText('接口出错')
    }
  }
  return (
    <SafeAreaView style={styles.safeAreaWrapper}>
      <LeftArrowButton />
      <KeyboardAwareScrollView scrollEnabled={false} style={styles.container}>
        <CustomText fontFamily="Semibold" style={styles.title}>
          {titleText}
        </CustomText>
        <CustomText style={styles.subtitle}>{subTitleText}</CustomText>
        {/* 表单部分 */}
        <View style={styles.formWrapper}>
          {/* 密码输入 */}
          <MyPasswordInput
            label="密码"
            placeholder="您的密码"
            value={password}
            setValue={setPassword}
          />
          {/* 确认密码输入 */}
          <MyPasswordInput
            label="再次确认"
            placeholder="再次输入的密码"
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
          {errorText && <ErrorText>{errorText}</ErrorText>}
          <BigButton
            onPress={handleNextSetup}
            activeOpacity={1}
            style={{ opacity: nextBtnIsDisabled ? 0.6 : 1 }}
            disabled={nextBtnIsDisabled}
          >
            下一步
          </BigButton>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    color: Colors.text.primary,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: Colors.text.secondary,
  },
  formWrapper: {
    gap: 20,
    marginTop: 50,
  },
})
