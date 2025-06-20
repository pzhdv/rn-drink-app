import React, { FC } from 'react'
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '@/constants/Colors'
import { NewProductType } from '@/types'
import CustomText from '../CustomText'
import ProductImage from '../ProductImage'

interface IProps {
  productList: NewProductType[]
}
// 新品推荐
const NewProductRecommend: FC<IProps> = props => {
  const onGoodDetailPage = () => {
    console.log('跳转商品详情页面')
  }

  return (
    <>
      <CustomText fontFamily="Medium" style={styles.categoryTitle}>
        新品推荐
      </CustomText>
      {/* 推荐商品列表 */}
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={props.productList}
        keyExtractor={item => `${item.goodId}`}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onGoodDetailPage}
              style={[
                styles.goodItemWrapper,
                {
                  marginRight: index === props.productList.length - 1 ? 0 : 15,
                },
              ]}
            >
              <ProductImage
                imgUrl={item.goodImgUrl}
                wrapperHeight={105}
                wrapperWidth={105}
                wrapperBorderRadius={10}
                imageHeight={105}
                imageWidth={73}
              />
              <CustomText style={styles.goodNameText}>
                {item.goodName}
              </CustomText>
            </TouchableOpacity>
          )
        }}
      />
    </>
  )
}

export default NewProductRecommend

const styles = StyleSheet.create({
  categoryTitle: {
    color: Colors.text.primary,
    fontSize: 16,
    marginVertical: 15,
  },

  goodItemWrapper: {
    width: 105,
    height: 132,
    alignItems: 'center',
  },
  goodNameText: {
    color: Colors.text.xptj,
    fontSize: 12,
    marginTop: 10,
  },
})
