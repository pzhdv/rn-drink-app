import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import Colors from '@/constants/Colors'

import LeftArrowButton from '@/components/LeftArrowButton'
import CustomText from '@/components/CustomText'
import BigButton from '@/components/BigButton'

export default function SetPwdSuccessScreen() {
  const params = useLocalSearchParams<{
    operationType: string
  }>()

  const titleText =
    params.operationType === 'findPassword' ? '重置成功' : '注册成功'
  const subTitleText =
    params.operationType === 'findPassword'
      ? '您的密码已重置，请牢记便于下次登录'
      : '请牢记账号，密码便于下次登录'

  const handleGoLogin = () => {
    router.replace('/LoginScreen')
  }
  return (
    <SafeAreaView style={styles.safeAreaWrapper}>
      <LeftArrowButton />
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('@/assets/images/set-pwd-success.png')}
            width={154}
            height={137}
          />
        </View>
        <CustomText fontFamily="Semibold" style={styles.title}>
          {titleText}
        </CustomText>
        <CustomText style={styles.subtitle}>{subTitleText}</CustomText>
        {/* 登录按钮 */}
        <BigButton onPress={handleGoLogin}>去登录</BigButton>
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
    paddingTop: 86,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: Colors.text.primary,
    textAlign: 'center',
    marginTop: 41,
  },
  subtitle: {
    marginTop: 5,
    marginBottom: 50,
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
})
