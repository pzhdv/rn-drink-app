import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native'

import useSafeAreaStyle from '@/hooks/useSafeAreaStyle'

import Colors from '@/constants/Colors'

import type { BannerType, NewProductType, ProductType } from '@/types'

import {
  getHomeHotProductList,
  getHomeNewProductList,
  getHomeSwiperImages,
} from '@/api/TempData'

import CustomText from '@/components/CustomText'
import HomeTop from '@/components/home/HomeTop'
import NewProductRecommend from '@/components/home/NewProductRecommend'
import MySwiper from '@/components/MySwiper'
import ProductItem from '@/components/ProductItem'

export default function HomeScreen() {
  const [initLoading, setInitLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [bannerImageList, setBannerImageList] = useState<BannerType[]>([]) // 轮播图图片列表
  const [newProductList, setNewProductList] = useState<NewProductType[]>([]) // 新品推荐列表
  const [hotProductList, setHotProductList] = useState<ProductType[]>([]) // 热门推荐列表
  const [hasMore, setHasMore] = useState(true)

  const { paddingTop } = useSafeAreaStyle()

  useEffect(() => {
    setBannerImageList(getHomeSwiperImages())
    setNewProductList(getHomeNewProductList())
    setHotProductList(getHomeHotProductList())
    setTimeout(() => {
      setInitLoading(false)
    }, 3000)
  }, [])

  // 下拉刷新
  const handlePullRefresh = () => {
    console.log('下拉刷新')
    setTimeout(() => {
      setRefreshing(false)
    }, 500)
  }

  // 上拉加载
  const handleLoadMore = () => {
    console.log('上拉加载')
    setHasMore(true)
    setTimeout(() => {
      setHasMore(false)
    }, 500)
  }

  if (initLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <View style={[{ paddingTop }, styles.container]}>
      <FlatList
        style={{ paddingTop: 4 }}
        showsHorizontalScrollIndicator={false} // 显示水平滚动条
        showsVerticalScrollIndicator={false} // 显示垂直滚动条
        ListHeaderComponent={
          <>
            {/* 首页头部组件 */}
            <HomeTop />
            {/* 轮播图 */}
            <MySwiper swiperImageList={bannerImageList} showPagination={true} />
            {/* 新品推荐 */}
            <NewProductRecommend productList={newProductList} />
            <CustomText fontFamily="Medium" style={styles.categoryTitle}>
              猜你喜欢
            </CustomText>
          </>
        }
        data={hotProductList}
        keyExtractor={item => `${item.goodId}`}
        renderItem={({ item }) => (
          <ProductItem
            good={item}
            imgUrl={item.goodImgUrl}
            wrapperHeight={105}
            wrapperWidth={105}
            wrapperBorderRadius={10}
            imageHeight={100}
            imageWidth={73}
          />
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1} // 距离底部10%时触发加载
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handlePullRefresh}
            colors={['red']}
            tintColor="red"
          />
        }
        ListFooterComponent={
          hasMore && hotProductList.length > 0 ? (
            <ActivityIndicator
              size="large"
              style={styles.footerLoader}
              color={'#4CAF50'}
            />
          ) : null
        }
        ListEmptyComponent={<CustomText>暂无数据</CustomText>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.white,
  },
  categoryTitle: {
    color: Colors.text.primary,
    fontSize: 16,
    marginTop: 25,
  },
  footerLoader: {
    marginVertical: 20,
  },
})
