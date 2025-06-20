import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import type { ProductImageType, ProductType } from '@/types'

import Colors from '@/constants/Colors'

import CustomText from './CustomText'
import ProductImage from './ProductImage'
import Round from './Round'

type PropsType = {
  good: ProductType
} & ProductImageType

const ProductItem: FC<PropsType> = props => {
  return (
    <View style={styles.goodItemWrapper}>
      <ProductImage
        imgUrl={props.good.goodImgUrl}
        wrapperHeight={props.wrapperHeight}
        wrapperWidth={props.wrapperWidth}
        wrapperBorderRadius={props.wrapperBorderRadius}
        imageHeight={props.imageHeight}
        imageWidth={props.imageWidth}
      />
      <View style={styles.goodInfoWrapper}>
        <CustomText fontFamily="Medium" style={styles.titleText}>
          {props.good.goodName}
        </CustomText>
        <View style={[styles.flexRow, styles.tagWrapper]}>
          {props.good.tags.map(item => {
            return (
              <CustomText style={styles.tagText} key={item.tagId}>
                {item.tagName}
              </CustomText>
            )
          })}
        </View>
        <CustomText style={styles.rateText}>
          好评率 {props.good.goodRate}%
        </CustomText>
        <View style={styles.moneyContainer}>
          <View style={[styles.flexRow, { gap: 2, alignItems: 'flex-end' }]}>
            <CustomText fontFamily="Medium" style={styles.currencyText}>
              ￥
            </CustomText>
            <CustomText fontFamily="Medium" style={styles.moneyText}>
              {props.good.goodPrice}
            </CustomText>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.specificationWrapper}
          >
            <CustomText fontFamily="Medium" style={styles.specificationText}>
              选规格
            </CustomText>
            <Round
              buyCount={props.good.buyCount}
              style={{
                right: 0,
                top: -5,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  goodItemWrapper: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  imageWrapper: {
    backgroundColor: Colors.productImgBg,
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
  tagWrapper: {
    paddingVertical: 4,
    gap: 5,
  },
  tagText: {
    color: Colors.text.tag,
    backgroundColor: Colors.tagBg,
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 2,
    fontSize: 11,
  },
  rateText: {
    color: Colors.text.tag,
    fontSize: 11,
  },
  moneyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  currencyText: {
    color: Colors.text.primary,
    fontSize: 12,
  },
  moneyText: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  specificationWrapper: {
    position: 'relative',
    backgroundColor: Colors.button.primaryBg,
    width: 47,
    height: 22,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  specificationText: {
    color: Colors.white,
    fontSize: 11,
  },
})
