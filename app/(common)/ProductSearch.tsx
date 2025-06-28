import React, { useMemo, useState } from 'react'
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ProductType } from '@/types'

import { getSearchProductList } from '@/api/TempData'

import Colors from '@/constants/Colors'

import SearchBar from '@/components/SearchBar'
import CustomText from '@/components/CustomText'
import GotoPayButton from '@/components/GotoPayButton'
import ProductItem from '@/components/ProductItem'

export default function ProductSearchScreen() {
  const hotSearchList = [
    '粒粒红柚',
    '芒果',
    '冰红茶',
    '多肉青提冻',
    '粒粒红柚',
    '多肉青提冻',
    '青芒芒甘露',
  ]

  const [searchText, setSearchText] = useState<string>()
  const [searchProductList, setSearchProductList] = useState<ProductType[]>([]) // 查询商品列表
  // 是否开启下拉刷新 上拉加载
  const scrollEnabled = useMemo(
    () => searchProductList.length > 5,
    [searchProductList],
  )

  const hasProduct = useMemo(
    () => searchProductList.length > 0,
    [searchProductList],
  )

  const handleSearch = () => {
    console.log('查询')
    if (searchText) setSearchProductList(getSearchProductList())
    else {
      setSearchProductList([])
    }
  }

  const renderEmptyComponent = () => {
    return (
      <View style={styles.hotSearchWrapper}>
        <CustomText fontFamily="Semibold" style={styles.hotSearchTitle}>
          热门搜索
        </CustomText>
        <View style={styles.hotSearchListWrapper}>
          {hotSearchList.map((item, index) => {
            return (
              <TouchableOpacity style={[styles.hotSearchItem]} key={index}>
                <CustomText style={styles.hotSearchItemText}>{item}</CustomText>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.safeAreaWrapper}>
      {/* 头部查询 */}
      <SearchBar
        onChangeText={newText => setSearchText(newText)}
        value={searchText}
        placeholder="吃出美好生活"
        onSearch={handleSearch}
      />
      <View style={styles.container}>
        <FlatList
          scrollEnabled={scrollEnabled} // 是否开启滚动
          showsHorizontalScrollIndicator={false} // 显示水平滚动条
          showsVerticalScrollIndicator={false} // 显示垂直滚动条
          ListHeaderComponent={
            hasProduct ? (
              <View style={styles.totalCountTitleWrapper}>
                <CustomText
                  fontFamily="Semibold"
                  style={styles.totalCountTitle}
                >
                  {`当前门店共${searchProductList.length}个商品`}
                </CustomText>
              </View>
            ) : null
          }
          data={searchProductList}
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
          ListEmptyComponent={renderEmptyComponent()}
        />
        {/* 条件判断是否显示 */}
        {hasProduct && <GotoPayButton />}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  hotSearchWrapper: {
    marginTop: 14,
  },
  hotSearchTitle: {
    fontSize: 15,
  },
  hotSearchListWrapper: {
    marginTop: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hotSearchItem: {
    backgroundColor: Colors.ultralightGray,
    paddingTop: 5,
    paddingBottom: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginVertical: 6,
    marginHorizontal: 5,
  },
  hotSearchItemText: {
    fontSize: 11,
    color: Colors.text.mediumGray,
  },
  totalCountTitleWrapper: {
    marginTop: 16,
  },
  totalCountTitle: {
    fontSize: 12,
    color: Colors.text.mediumGray,
  },
})
