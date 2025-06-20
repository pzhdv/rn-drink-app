import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Swiper from 'react-native-swiper'

import { BannerType } from '@/types'

import Colors from '@/constants/Colors'

export interface IProps {
  /**
   * 是否显示分页器
   */
  showPagination: boolean
  /**
   * 轮播图数据列表
   */
  swiperImageList: BannerType[]
}

// Swiper轮播图组件
const MySwiper: FC<IProps> = props => {
  return (
    <View style={styles.swiperWrapper}>
      <Swiper
        //高度
        // height={142}
        // 是否显示控制按钮（即左右两侧的箭头是否可见）
        showsButtons={false}
        //这个很主要啊，解决白屏问题
        removeClippedSubviews={false}
        // 切换时间，单位秒
        autoplayTimeout={5}
        // 是否自动轮播
        autoplay={true}
        // 如果为true，滚动方向是横向的，如果为false，滚动方向是竖向的
        horizontal={true}
        // 是否显示分页器
        showsPagination={props.showPagination}
        // 分页风格
        paginationStyle={styles.paginationStyle}
        // 点样式
        dotStyle={styles.dotStyle}
        // 激活点样式
        activeDotStyle={styles.activeDotStyle}
      >
        {props.swiperImageList.map((item, index) => {
          return (
            <TouchableOpacity activeOpacity={1} key={index}>
              <Image
                resizeMode="cover"
                source={{
                  uri: item.bannerUrl,
                }}
                style={styles.bannerImgStyle}
              />
            </TouchableOpacity>
          )
        })}
      </Swiper>
    </View>
  )
}

export default MySwiper

const styles = StyleSheet.create({
  swiperWrapper: {
    marginTop: 20,
    marginBottom: 15,
    borderRadius: 8,
    height: 170, //142
    overflow: 'hidden',
  },
  bannerImgStyle: {
    width: '100%',
    height: '100%',
  },
  paginationStyle: {
    bottom: 10,
  },
  dotStyle: {
    backgroundColor: Colors.swiper.dotColor,
    opacity: 0.8,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeDotStyle: {
    backgroundColor: Colors.swiper.activeDotColor,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
})
