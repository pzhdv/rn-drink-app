import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  FlatList,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'

import { CategoryType, ProductType, SectionLayout } from '@/types'

import {
  getMenuLeftCategoryList,
  getMenuRightCategoryProductsList,
} from '@/api/TempData'

import Colors from '@/constants/Colors'
import ProductItem from '../ProductItem'
import GotoPayButton from '../GotoPayButton'
import CustomText from '../CustomText'

const ProductCategory = () => {
  // 左侧分类数据
  const [categories] = useState<CategoryType[]>(getMenuLeftCategoryList())

  // 右侧商品数据
  const [products] = useState<ProductType[]>(getMenuRightCategoryProductsList())

  // 状态管理
  const [activeCategory, setActiveCategory] = useState(categories[0].categoryId)
  const [sectionLayouts, setSectionLayouts] = useState<SectionLayout[]>([])

  // Refs
  const leftListRef = useRef<FlatList>(null)
  const rightListRef = useRef<FlatList>(null)

  // 分组商品数据 使用 useMemo 优化分组计算
  const groupedProducts = useMemo(
    () =>
      categories.map(category => ({
        category,
        items: products.filter(p => p.categoryId === category.categoryId),
      })),
    [categories, products],
  )

  // 计算布局偏移量
  const calculateLayouts = useCallback(() => {
    let offset = 0
    const newLayouts: SectionLayout[] = []

    groupedProducts.forEach(({ category }) => {
      const existing = sectionLayouts.find(
        l => l.categoryId === category.categoryId,
      )
      const height = existing?.height ?? 0

      newLayouts.push({
        categoryId: category.categoryId,
        offset,
        height,
      })

      offset += height
    })

    // 深度比较避免不必要更新
    if (JSON.stringify(newLayouts) !== JSON.stringify(sectionLayouts)) {
      setSectionLayouts(newLayouts)
    }
  }, [groupedProducts, sectionLayouts])

  useEffect(() => {
    calculateLayouts()
  }, [calculateLayouts])

  // 左侧菜单被点击 处理分类点击
  const handleCategoryPress = useCallback(
    (categoryId: number) => {
      setActiveCategory(categoryId)
      const targetOffset =
        sectionLayouts.find(l => l.categoryId === categoryId)?.offset ?? 0

      // 滚动右侧列表
      rightListRef.current?.scrollToOffset({
        offset: targetOffset,
        animated: true,
      })

      // 滚动左侧列表居中
      const categoryIndex = categories.findIndex(
        c => c.categoryId === categoryId,
      )
      if (categoryIndex >= 0) {
        leftListRef.current?.scrollToIndex({
          index: Math.min(Math.max(categoryIndex, 0), categories.length - 1),
          viewPosition: 0.5,
          animated: true,
        })
      }
    },
    [sectionLayouts, categories],
  )

  // 处理右侧滚动
  const handleRightScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const scrollY = event.nativeEvent.contentOffset.y
      const visibleSection = [...sectionLayouts]
        .reverse()
        .find(l => scrollY >= l.offset)

      if (visibleSection && visibleSection.categoryId !== activeCategory) {
        setActiveCategory(visibleSection.categoryId)

        // 滚动左侧列表
        const categoryIndex = categories.findIndex(
          c => c.categoryId === visibleSection.categoryId,
        )
        if (categoryIndex >= 0) {
          leftListRef.current?.scrollToIndex({
            index: categoryIndex,
            viewPosition: 0.5,
            animated: true,
          })
        }
      }
    },
    [activeCategory, sectionLayouts, categories],
  )

  // 记录分类区块高度
  const handleSectionLayout = useCallback(
    (categoryId: number, height: number) => {
      setSectionLayouts(prev => {
        const newLayouts = prev.map(l =>
          l.categoryId === categoryId && l.height !== height
            ? { ...l, height }
            : l,
        )
        // 仅在高度变化时更新
        return JSON.stringify(newLayouts) !== JSON.stringify(prev)
          ? newLayouts
          : prev
      })
    },
    [],
  )

  // 渲染左侧分类项
  const renderLeftItem = useCallback(
    ({ item }: { item: CategoryType }) => (
      <TouchableOpacity
        activeOpacity={1}
        style={[
          styles.leftCategoryItemWrapper,
          activeCategory === item.categoryId && styles.leftCategoryItemActive,
        ]}
        onPress={() => handleCategoryPress(item.categoryId)}
      >
        <CustomText
          style={[
            styles.menuTextStyle,
            activeCategory === item.categoryId && styles.menuTextActiveStyle,
          ]}
        >
          {item.categoryName}
        </CustomText>
      </TouchableOpacity>
    ),
    [activeCategory, handleCategoryPress],
  )

  // 右侧列表渲染
  const renderRightSection = useCallback(
    ({ item }: { item: { category: CategoryType; items: ProductType[] } }) => (
      <View
        onLayout={(e: LayoutChangeEvent) =>
          handleSectionLayout(
            item.category.categoryId,
            e.nativeEvent.layout.height,
          )
        }
        style={styles.categoryItemWrapper}
      >
        <CustomText fontFamily="Medium" style={styles.categoryTitle}>
          {item.category.categoryName}
        </CustomText>
        {item.items.map(productItem => (
          <ProductItem
            good={productItem}
            imgUrl={productItem.goodImgUrl}
            wrapperHeight={95}
            wrapperWidth={95}
            wrapperBorderRadius={8}
            imageWidth={66}
            imageHeight={90}
            key={productItem.goodId}
          />
        ))}
      </View>
    ),
    [handleSectionLayout],
  )

  return (
    <View style={styles.categoryWrapper}>
      {/* 左侧分类列表 */}
      <View style={styles.leftCategoryList}>
        <FlatList
          ref={leftListRef}
          data={categories}
          renderItem={renderLeftItem}
          keyExtractor={item => `${item.categoryId}`}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* 右侧内容列表 */}
      <FlatList
        ref={rightListRef}
        data={groupedProducts}
        renderItem={renderRightSection}
        onScroll={handleRightScroll}
        keyExtractor={item => `${item.category.categoryId}`}
        showsVerticalScrollIndicator={false}
        style={styles.rightCategoryWrapper}
        scrollEventThrottle={16}
        getItemLayout={(_, index) => ({
          length: sectionLayouts[index]?.height ?? 0,
          offset: sectionLayouts[index]?.offset ?? 0,
          index,
        })}
      />
    </View>
  )
}

export default ProductCategory

const styles = StyleSheet.create({
  categoryWrapper: {
    flexDirection: 'row',
    flex: 1,
    gap: 15,
  },
  leftCategoryList: {
    width: 80,
    paddingBottom: 15,
    paddingTop: 15,
    backgroundColor: Colors.ultralightGray,
  },
  leftCategoryItemWrapper: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftCategoryItemActive: {
    backgroundColor: Colors.white,
  },
  menuTextStyle: {
    fontSize: 12,
    color: Colors.text.lightGray,
  },
  menuTextActiveStyle: {
    color: Colors.text.primary,
    fontWeight: 'bold',
  },
  rightCategoryWrapper: {
    flex: 1,
    paddingRight: 15,
  },
  categoryItemWrapper: {
    marginBottom: 30,
  },
  categoryTitle: {
    fontSize: 14,
    color: Colors.text.primary,
    fontWeight: 'bold',
  },
})
