import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'

import { useCart } from '@/contexts/CartContext'

import { ProductType } from '@/types'

import { getCartProductList } from '@/api/TempData'

import Colors from '@/constants/Colors'

import CustomText from './CustomText'
import CartSummary from './CartSummary'
import IconFont from './IconFont'
import ProductImage from './ProductImage'
import ByCount from './ByCount'
import CustomRadio from './CustomRadio'

// 去结算组件
const GotoPayButton = () => {
  const [checkAll, setCheckAll] = useState(true)
  const [cartProductList, setCartProductList] = useState<ProductType[]>([]) // 热门推荐列表

  const { isShowCartList, showCartList, hideCartList } = useCart()
  const handleCheckAll = () => {
    setCheckAll(pre => !pre)
  }

  useEffect(() => {
    setCartProductList(getCartProductList())
  }, [])

  if (!isShowCartList) {
    return (
      <View style={[styles.mask]}>
        <CartSummary onShowCart={showCartList} />
      </View>
    )
  }
  return (
    <View
      style={[styles.mask, { paddingBottom: 0, backgroundColor: Colors.mask }]}
    >
      <View style={styles.cartContainer}>
        <View style={styles.cartHeaderContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <CustomRadio
              checked={checkAll}
              onPress={handleCheckAll}
              style={{ marginRight: 10 }}
            />
            <CustomText style={styles.selectCountText}>
              已选购商品（2件）
            </CustomText>
          </View>
          <TouchableOpacity style={{ flexDirection: 'row', gap: 2 }}>
            <IconFont name="shanchu" size={16} color={Colors.text.mediumGray} />
            <CustomText style={styles.clearText}>清空购物车</CustomText>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.cartContentContainer}>
          {cartProductList.map(productItem => (
            <View style={styles.cartItemWrapper} key={productItem.goodId}>
              <View
                style={{
                  justifyContent: 'center',
                }}
              >
                <CustomRadio
                  checked={checkAll}
                  onPress={handleCheckAll}
                  style={{ marginRight: 10 }}
                />
              </View>
              <View style={styles.goodItemWrapper}>
                <ProductImage
                  imgUrl={productItem.goodImgUrl}
                  wrapperHeight={80}
                  wrapperWidth={80}
                  wrapperBorderRadius={6}
                  imageWidth={56}
                  imageHeight={76}
                />
                <View style={styles.goodInfoWrapper}>
                  <CustomText fontFamily="Medium" style={styles.titleText}>
                    {productItem.goodName}
                  </CustomText>
                  <CustomText style={styles.specText}>
                    大杯/去冰/半塘
                  </CustomText>

                  <View style={styles.moneyContainer}>
                    <CustomText fontFamily="Medium" style={styles.currencyText}>
                      ¥
                    </CustomText>
                    <CustomText fontFamily="Medium" style={styles.moneyText}>
                      {productItem.goodPrice}
                    </CustomText>
                  </View>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'flex-end',
                }}
              >
                <ByCount />
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.cartFooterContainer}>
          <CartSummary onShowCart={hideCartList} />
        </View>
      </View>
    </View>
  )
}

export default GotoPayButton

const styles = StyleSheet.create({
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: 10,
    justifyContent: 'flex-end',
  },

  cartContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 10,
    overflow: 'hidden',
  },
  cartHeaderContainer: {
    height: 55,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.ultralightGray,
    borderBottomWidth: 0.5,
  },
  selectCountText: {
    fontSize: 14,
    color: Colors.text.primary,
  },
  clearText: {
    fontSize: 12,
    color: Colors.text.mediumGray,
  },
  cartContentContainer: {
    paddingHorizontal: 15,
    marginTop: 5.5,
    maxHeight: 400,
  },
  cartItemWrapper: {
    marginTop: 20,
    flexDirection: 'row',
  },
  goodItemWrapper: {
    flex: 1,
    gap: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    backgroundColor: Colors.mintyGray,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 105,
    height: 105,
  },
  goodInfoWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titleText: {
    color: Colors.text.primary,
    fontSize: 14,
  },
  specText: {
    color: Colors.text.lightGray,
    fontSize: 12,
  },
  moneyContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  currencyText: {
    color: Colors.text.primary,
    fontSize: 12,
    marginRight: 2,
  },
  moneyText: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  cartFooterContainer: {
    marginTop: 20,
  },
})
