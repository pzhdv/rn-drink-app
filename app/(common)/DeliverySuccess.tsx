import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

import useSafeAreaStyle from '@/hooks/useSafeAreaStyle'

import Colors from '@/constants/Colors'

import HeaderBar from '@/components/HeaderBar'
import CustomText from '@/components/CustomText'
import BigButton from '@/components/BigButton'
import { router } from 'expo-router'

// 支付成功 配送页面
export default function DeliverySuccessScreen() {
  const titleText = '支付成功'
  const subTitleText = '正在制作中，预计10:30到达您的手中'

  const { paddingTop, paddingBottom } = useSafeAreaStyle()

  return (
    <View style={[styles.container, { paddingTop, paddingBottom }]}>
      <HeaderBar />
      <View style={styles.contentContainer}>
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

        <BigButton onPress={() => router.replace('/(tabs)/HomeScreen')}>
          知道了
        </BigButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
  contentContainer: {
    paddingTop: 107,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: Colors.text.primary,
    textAlign: 'center',
    marginTop: 40,
  },
  subtitle: {
    marginTop: 5,
    marginBottom: 30,
    fontSize: 14,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  stepText: {
    fontSize: 12,
    color: Colors.jungleGreen,
  },
})
