import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'

import useSafeAreaStyle from '@/hooks/useSafeAreaStyle'

import { BannerType } from '@/types'

import { getMenuSwiperImages } from '@/api/TempData'

import Colors from '@/constants/Colors'

import MenuTop from '@/components/menu/MenuTop'
import MySwiper from '@/components/MySwiper'
import ProductCategory from '@/components/menu/ProductCategory'
import GotoPayButton from '@/components/GotoPayButton'

export default function MenuScreen() {
  const [swiperImageList, setSwiperImageLis] = useState<BannerType[]>([]) // 轮播图图片列表
  const { paddingTop } = useSafeAreaStyle() //安全区域样式hook

  useEffect(() => {
    setSwiperImageLis(getMenuSwiperImages())
  }, [])

  return (
    <View style={[{ paddingTop }, styles.container]}>
      <View style={styles.headerWrapper}>
        {/* 菜单页头部组件 */}
        <MenuTop />
        {/* 轮播图 */}
        <MySwiper swiperImageList={swiperImageList} showPagination={false} />
      </View>
      {/* 分类区域 */}
      <ProductCategory />
      <GotoPayButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerWrapper: {
    paddingHorizontal: 15,
    paddingTop: 4,
  },
})
