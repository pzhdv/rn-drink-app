import React, { FC } from 'react'
import { Image, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import Colors from '@/constants/Colors'

import { ProductImageType } from '@/types'

const ProductImage: FC<ProductImageType> = props => {
  return (
    <LinearGradient
      colors={[
        Colors.mintyGray,
        Colors.mintyGray,
        '#FDFDFD',
        '#F6F6F6',
        '#F2F2F2',
      ]} // 从上到下的渐变颜色
      locations={[0, 0.6, 0.7, 0.8, 1]} // 定义颜色位置数组
      style={[
        styles.imageWrapper,
        {
          height: props.wrapperHeight,
          width: props.wrapperWidth,
          borderRadius: props.wrapperBorderRadius,
        },
      ]}
    >
      <Image
        style={{ width: props.imageWidth, height: props.imageHeight }}
        source={{
          uri: props.imgUrl,
        }}
      />
    </LinearGradient>
  )
}

export default ProductImage

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
})
