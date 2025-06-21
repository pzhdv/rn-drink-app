import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import Colors from '@/constants/Colors'

import Round from './Round'
import CustomText from './CustomText'
import IconFont from './IconFont'

interface IProps {
  onShowCart: () => void
}

const CartSummary: FC<IProps> = props => {
  // 跳转支付页面
  const goToPayPage = () => {}

  // 显示购物车列表
  const setShowCartList = () => {
    props.onShowCart()
  }

  return (
    <View style={styles.buyInfoContainer}>
      <View style={styles.leftWrapper}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={setShowCartList}
          style={styles.bagWrapper}
        >
          <Round
            buyCount={1}
            style={{
              right: 12,
              top: 0,
              zIndex: 9,
            }}
          />
          <IconFont name="gouwuche1" size={35} color={Colors.text.secondary} />
        </TouchableOpacity>
        <View style={styles.buyInfoWrapper}>
          <View style={styles.priceWrapper}>
            <CustomText style={styles.predictText}>预计到手</CustomText>
            <CustomText fontFamily="Medium" style={styles.currencyText}>
              ￥
            </CustomText>
            <CustomText fontFamily="Medium" style={styles.priceText}>
              32
            </CustomText>
          </View>
          <CustomText fontFamily="Medium" style={styles.descText}>
            已享受更低优惠，共减免￥26
          </CustomText>
        </View>
      </View>
      <TouchableOpacity onPress={goToPayPage} style={styles.toPlayBtnWrapper}>
        <CustomText fontFamily="Medium" style={styles.payBtnText}>
          去结算
        </CustomText>
      </TouchableOpacity>
    </View>
  )
}

export default CartSummary

const styles = StyleSheet.create({
  buyInfoContainer: {
    height: 48,
    marginHorizontal: 15,
    backgroundColor: Colors.white,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftWrapper: {
    flexDirection: 'row',
  },
  bagWrapper: {
    paddingLeft: 17,
    position: 'relative',
    paddingRight: 15,
  },
  buyInfoWrapper: {
    justifyContent: 'center',
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  predictText: {
    fontSize: 14,
    color: Colors.text.primary,
    fontFamily: 'PingFang-SC-Regular',
  },
  currencyText: {
    fontSize: 12,
    color: Colors.text.primary,
    marginLeft: 5,
  },
  priceText: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  descText: {
    fontSize: 11,
    color: Colors.text.lightGray,
  },

  toPlayBtnWrapper: {
    height: 44,
    paddingLeft: 18,
    paddingRight: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.text.primary,
    borderRadius: 22,
  },
  payBtnText: {
    fontSize: 14,
    color: Colors.white,
  },
})
