import React, { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'

import Colors from '@/constants/Colors'

import { ProductImageType } from '@/types'

const ProductImage: FC<ProductImageType> = props => {
  return (
    <View
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
    </View>
  )
}

export default ProductImage

const styles = StyleSheet.create({
  imageWrapper: {
    backgroundColor: Colors.mintyGray,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})
