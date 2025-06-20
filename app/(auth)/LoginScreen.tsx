import { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
// 点击输入框以外区域 隐藏键盘
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Colors from '@/constants/Colors'

import { OperationType, User } from '@/types'

import { useAuth } from '@/contexts/AuthContext'

import CustomText from '@/components/CustomText'
import MyTextInput from '@/components/MyTextInput'
import MyPasswordInput from '@/components/MyPasswordInput'
import ErrorText from '@/components/ErrorText'
import LinkText from '@/components/LinkText'
import BigButton from '@/components/BigButton'
import ThirdPartyLogin from '@/components/ThirdPartyLogin'

export default function LoginScreen() {
  const [account, setAccount] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [errorText, setErrorText] = useState<string>()
  const [isDisable, setIsDisable] = useState<boolean>(true)
  const { saveLoginUser } = useAuth()

  const titleText = '登录'
  const subTitleText = '登录您的账号'

  useEffect(() => {
    // 注册操作
    // const operationType: OperationType = 'register'
    // 模拟点击注册
    // router.push({
    //   pathname: '/RegisterScreen',
    //   params: { operationType },
    // })
    // 模拟点击注册->设置新密码
    // router.push({
    //   pathname: '/SetPasswordScreen',
    //   params: {
    //     userPhoneNumber: account || '123',
    //     operationType,
    //   },
    // })
    // 模拟点击注册->设置新密码->密码设置成功页面
    // router.replace({
    //   pathname: '/SetPwdSuccessScreen',
    //   params: {
    //     operationType,
    //   },
    // })
    /**
     *忘记密码操作
     */
    // const operationType: OperationType = 'findPassword'
    // 模拟点击忘记密码
    // router.push({
    //   pathname: '/RegisterScreen',
    //   params: { operationType },
    // })
    // 模拟点击忘记密码->设置新密码
    // router.push({
    //   pathname: '/SetPasswordScreen',
    //   params: {
    //     userPhoneNumber: account || '123',
    //     operationType,
    //   },
    // })
    // 模拟点击忘记密码->设置新密码->密码设置成功页面
    // router.replace({
    //   pathname: '/SetPwdSuccessScreen',
    //   params: {
    //     operationType,
    //   },
    // })
  }, [])

  useEffect(() => {
    if (account && password) {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
    setErrorText('')
  }, [account, password])

  // todo 用户登录
  const handleLogin = async () => {
    if (!account || !password) {
      // 账号或密码为空
      return
    }
    // 模拟接口
    const loginAPI = async () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (account === '123' && password === '123') {
            const userData: User = {
              id: 'xxx',
              username: 'xxx',
              email: 'xxx',
              token: 'xxxx',
            }
            resolve({ data: userData, code: 200, message: 'success' })
          } else {
            resolve({ data: null, code: 100000, message: '账号或密码错误' })
          }
        }, 20)
      })
    }
    try {
      const res: any = await loginAPI()
      if (res.code === 200) {
        await saveLoginUser(res.data)
        setErrorText('')
        router.replace('/HomeScreen')
      } else {
        setErrorText('账号或密码错误')
      }
    } catch (error) {
      console.log('登录失败', error)
      setErrorText('请检查网络')
    }
  }

  // ! 跳转注册页面
  const goRegisterScreen = () => {
    const operationType: OperationType = 'register'
    router.push({
      pathname: '/RegisterScreen',
      params: { operationType },
    })
  }

  // ! 跳转忘记密码
  const goForgetPasswordScreen = () => {
    const operationType: OperationType = 'findPassword'
    router.push({
      pathname: '/RegisterScreen',
      params: { operationType },
    })
  }
  return (
    <SafeAreaView style={styles.safeAreaWrapper}>
      <KeyboardAwareScrollView scrollEnabled={false} style={styles.container}>
        <CustomText fontFamily="Semibold" style={styles.title}>
          {titleText}
        </CustomText>
        <CustomText style={styles.subtitle}>{subTitleText}</CustomText>
        {/* 表单部分 */}
        <View style={styles.formWrapper}>
          <MyTextInput
            label="手机号/用户名/邮箱"
            placeholder="您的手机号/用户名/邮箱 123"
            value={account}
            setValue={setAccount}
            style={{ marginBottom: 20 }}
          />
          <MyPasswordInput
            label="密码"
            placeholder="您的密码 123"
            value={password}
            setValue={setPassword}
            style={{ marginBottom: 15 }}
          />

          {errorText && <ErrorText>{errorText}</ErrorText>}

          <View style={styles.linkContainer}>
            <LinkText text="用户注册" onPress={goRegisterScreen} />
            <LinkText text="忘记密码" onPress={goForgetPasswordScreen} />
          </View>

          <BigButton
            onPress={handleLogin}
            activeOpacity={1}
            style={{ opacity: isDisable ? 0.6 : 1 }}
            disabled={isDisable}
          >
            登录
          </BigButton>
        </View>
        {/* 第三方登录 */}
        <ThirdPartyLogin />
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
    paddingTop: 96,
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
    marginTop: 50,
    marginBottom: 108,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
})
