import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { router } from 'expo-router'

import useSafeAreaStyle from '@/hooks/useSafeAreaStyle'

import Colors from '@/constants/Colors'

import HeaderBar from '@/components/HeaderBar'
import ConfirmProductList from '@/components/OrderConfirm/ConfirmProductList'
import StoreLocation from '@/components/OrderConfirm/StoreLocation'
import TotalAmount from '@/components/OrderConfirm/TotalAmount'
import SelectPayment from '@/components/OrderConfirm/SelectPayment'
import BigButton from '@/components/BigButton'

export default function OrderConfirmScreen() {
  const { paddingTop, paddingBottom } = useSafeAreaStyle()

  const handlePay = () => {
    router.push('/PaySuccess')
  }
  return (
    <View style={[styles.container, { paddingTop, paddingBottom }]}>
      <HeaderBar title="确认订单" />
      {/* 门店位置 */}
      <StoreLocation />
      {/* 确认产品列表 */}
      <View style={styles.confirmProductWrapper}>
        {/* 待支付产品列表 */}
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <ConfirmProductList />
        </ScrollView>
        {/* 价格小计 */}
        <TotalAmount />
      </View>
      <SelectPayment />
      <View style={{ marginTop: 25, marginBottom: 10 }}>
        <BigButton activeOpacity={0.8} onPress={handlePay}>
          需支付￥55
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

  confirmProductWrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginTop: 15,
    padding: 15,
    borderBottomColor: Colors.ultralightGray,
    borderBottomWidth: 0.5,
  },
})
