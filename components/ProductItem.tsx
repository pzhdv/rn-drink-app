import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import type { ProductImageType, ProductType } from '@/types'

import Colors from '@/constants/Colors'

import CustomText from './CustomText'
import ProductImage from './ProductImage'
import SpecButton from './SpecButton'

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
        <View style={[{ flexDirection: 'row' }, styles.tagWrapper]}>
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
          <CustomText fontFamily="Medium" style={styles.currencyText}>
            ￥
          </CustomText>
          <CustomText fontFamily="Medium" style={styles.moneyText}>
            {props.good.goodPrice}
          </CustomText>
          <SpecButton buyCount={props.good.buyCount} />
        </View>
      </View>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  goodItemWrapper: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
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
  tagWrapper: {
    paddingVertical: 4,
    gap: 5,
  },
  tagText: {
    color: Colors.text.lightGray,
    backgroundColor: Colors.ultralightGray,
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 2,
    fontSize: 11,
  },
  rateText: {
    color: Colors.text.lightGray,
    fontSize: 11,
    marginRight: 2,
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
})
