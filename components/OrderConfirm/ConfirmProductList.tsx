import React from 'react'
import { StyleSheet, View } from 'react-native'

import Colors from '@/constants/Colors'

import ProductImage from '../ProductImage'
import CustomText from '../CustomText'

const ProductItem = () => {
  const goodImgUrl =
    'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/xptj_02.png'
  return (
    <View style={styles.productItemContainer}>
      <ProductImage
        imgUrl={goodImgUrl}
        wrapperHeight={95}
        wrapperWidth={95}
        wrapperBorderRadius={8}
        imageWidth={66}
        imageHeight={90}
      />
      <View style={styles.goodInfoWrapper}>
        <View style={{ gap: 5 }}>
          <CustomText fontFamily="Medium" style={styles.titleText}>
            多肉青提冻
          </CustomText>
          <CustomText style={styles.specText}>大杯/去冰/半塘</CustomText>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <CustomText style={styles.specText}>x1</CustomText>
          <View style={styles.moneyContainer}>
            <CustomText fontFamily="Medium" style={styles.currencyText}>
              ¥
            </CustomText>
            <CustomText fontFamily="Medium" style={styles.moneyText}>
              28
            </CustomText>
          </View>
        </View>
      </View>
    </View>
  )
}

const ConfirmProductList = () => {
  return (
    <View style={styles.productListWrapper}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </View>
  )
}

export default ConfirmProductList

const styles = StyleSheet.create({
  productListWrapper: {
    gap: 15,
  },
  productItemContainer: {
    gap: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    color: Colors.text.mediumGray,
    fontSize: 12,
    marginRight: 4,
  },
  moneyText: {
    fontSize: 16,
    color: Colors.text.mediumGray,
  },
})
