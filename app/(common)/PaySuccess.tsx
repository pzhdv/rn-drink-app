import React, { useMemo, useState } from 'react'
import { StyleSheet, Image, View } from 'react-native'

import useSafeAreaStyle from '@/hooks/useSafeAreaStyle'

import Colors from '@/constants/Colors'

import HeaderBar from '@/components/HeaderBar'
import CustomText from '@/components/CustomText'
import BigButton from '@/components/BigButton'
import Steps from '@/components/Steps'

// 支付成功 自取页面
export default function PaySuccessScreen() {
  const titleText = '支付成功'
  const subTitleText = '下单成功，预计10:30完成'

  const { paddingTop, paddingBottom } = useSafeAreaStyle()

  const [stepNum, setStepNum] = useState(3) // 0:待商家接单 1:已接单、制作中 2:配送中 3:配送完毕
  const [stepList, setSteList] = useState<string[]>([
    '制作中',
    '配送中',
    '配送完毕',
  ])

  const isDisAbleCancel = useMemo(
    () => stepNum === stepList.length,
    [stepNum, stepList],
  )
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
        <View style={{ marginBottom: 50, paddingHorizontal: 25 }}>
          <Steps currentStepNum={stepNum} stepList={stepList} />
        </View>
        {/* 登录按钮 */}
        <View style={{ gap: 15 }}>
          <BigButton>取餐码</BigButton>
          {/* 禁止取消按钮颜色Colors.lightGray */}
          <BigButton
            disabled={isDisAbleCancel}
            style={{
              backgroundColor: isDisAbleCancel
                ? Colors.lightGray
                : Colors.fieryOrange,
            }}
          >
            取消订单
          </BigButton>
        </View>
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
