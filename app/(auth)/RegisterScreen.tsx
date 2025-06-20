import { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import Colors from '@/constants/Colors'

import LeftArrowButton from '@/components/LeftArrowButton'
import CustomText from '@/components/CustomText'
import MyTextInput from '@/components/MyTextInput'
import CaptchaInput from '@/components/CaptchaInput'
import ErrorText from '@/components/ErrorText'
import BigButton from '@/components/BigButton'

export default function RegisterScreen() {
  const [account, setAccount] = useState<string>()
  const [captcha, setCaptcha] = useState<string>()
  const [errorText, setErrorText] = useState<string>()
  const [isDisable, setIsDisable] = useState<boolean>(true)

  const params = useLocalSearchParams<{
    operationType: string
  }>()

  const titleText =
    params.operationType === 'findPassword' ? '忘记密码' : '用户注册'
  const subTitleText =
    params.operationType === 'findPassword'
      ? '输入手机号找回密码'
      : '通过手机号注册'

  useEffect(() => {
    if (account && captcha) {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
    setErrorText('')
  }, [account, captcha])

  // ! 点击下一步
  const handleNextSetup = async () => {
    if (!account || !captcha) {
      // 账号或验证码为空
      return
    }
    try {
      setIsDisable(true)
      if (captcha === '6666') {
        setErrorText('')
        router.push({
          pathname: '/SetPasswordScreen',
          params: {
            userPhoneNumber: account || '',
            operationType: params.operationType,
          },
        })
      } else {
        setErrorText('验证码错误')
      }
    } catch (error) {
      console.log('验证码验证失败', error)
      setErrorText('请检查网络')
    } finally {
      setIsDisable(false)
    }
  }

  // todo 获取验证码
  const handleGetVerificationCode = async () => {
    setCaptcha('')
    console.log('调用接口获取验证码')
  }

  return (
    <SafeAreaView style={styles.safeAreaWrapper}>
      <LeftArrowButton />
      <View style={styles.container}>
        <CustomText fontFamily="Semibold" style={styles.title}>
          {titleText}
        </CustomText>
        <CustomText style={styles.subtitle}>{subTitleText}</CustomText>
        {/* 表单部分 */}
        <View style={styles.formWrapper}>
          {/* 账号输入框 */}
          <MyTextInput
            label="手机号"
            placeholder="您的手机号"
            value={account}
            setValue={setAccount}
            keyboardType="number-pad" //number-pad：仅仅数字 phone-pad:电话号码 =86 183...
            maxLength={11}
          />
          {/* 验证码框 */}
          <CaptchaInput
            label="验证码"
            placeholder="输入您的验证码 6666"
            keyboardType="number-pad" //number-pad：仅仅数字
            maxLength={4}
            value={captcha}
            isDisable={false}
            setValue={setCaptcha}
            onGetVerificationCodeMethod={handleGetVerificationCode}
          />

          {errorText && <ErrorText>{errorText}</ErrorText>}

          <BigButton
            onPress={handleNextSetup}
            activeOpacity={1}
            style={{ opacity: isDisable ? 0.6 : 1 }}
            disabled={isDisable}
          >
            下一步
          </BigButton>
        </View>
      </View>
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text.secondary,
  },
  formWrapper: {
    marginTop: 50,
    gap: 20,
  },
})
