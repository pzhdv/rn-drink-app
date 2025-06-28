import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors'
import CustomRadio from '../CustomRadio'
import IconFont from '../IconFont'
import CustomText from '../CustomText'

const SelectPayment = () => {
  const [payment, setPayment] = useState<'weixin' | 'alipay'>('weixin')
  return (
    <View style={styles.container}>
      <View style={styles.itemWrapper}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          {/* zhifubaozhifu-01 */}
          <IconFont name="weixinzhifu" size={28} color={'#09BB07'} />
          <CustomText style={styles.payDescText}>微信支付</CustomText>
        </View>
        <CustomRadio
          checked={payment === 'weixin'}
          onPress={() => setPayment('weixin')}
        />
      </View>
      <View style={styles.itemWrapper}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <IconFont name="zhifubaozhifu-01" size={28} color={'#02A9F1'} />
          <CustomText style={styles.payDescText}>支付宝支付</CustomText>
        </View>
        <CustomRadio
          checked={payment === 'alipay'}
          onPress={() => setPayment('alipay')}
        />
      </View>
    </View>
  )
}

export default SelectPayment

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 22,
    gap: 22,
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  payDescText: {
    fontSize: 15,
    color: Colors.text.primary,
  },
})
