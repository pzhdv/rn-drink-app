import { BannerType, NewProductType, ProductType, CategoryType } from '@/types'

/**
 *页面测试数
 */
// 获取首页 轮播图列表
export const getHomeSwiperImages = () => {
  const bannerList: BannerType[] = [
    {
      bannerId: 1,
      bannerUrl:
        'https://pzh-1300189124.cos.ap-shanghai.myqcloud.com/tea-mall-app/banner-home-01.jpg',
    },
    {
      bannerId: 2,
      bannerUrl:
        'https://pzh-1300189124.cos.ap-shanghai.myqcloud.com/tea-mall-app/banner-home-02.jpg',
    },
    {
      bannerId: 3,
      bannerUrl:
        'https://pzh-1300189124.cos.ap-shanghai.myqcloud.com/tea-mall-app/banner-home-03.jpg',
    },
  ]
  return bannerList
}

// 获取首页 新品推荐数据列表
export const getHomeNewProductList = () => {
  // 新品推荐
  const newGoodList: NewProductType[] = [
    {
      goodId: 1,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/xptj_01.png',
      goodName: '复合果茶1',
    },
    {
      goodId: 2,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/xptj_02.png',
      goodName: '草莓奶昔2',
    },
    {
      goodId: 3,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/xptj_03.png',
      goodName: '小青桔冰沙3',
    },
    {
      goodId: 4,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/xptj_01.png',
      goodName: '复合果茶4',
    },
    {
      goodId: 5,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/xptj_02.png',
      goodName: '草莓奶昔5',
    },
    {
      goodId: 6,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/xptj_03.png',
      goodName: '小青桔冰沙6',
    },
  ]
  return newGoodList
}

// 获取首页 热门产品数据列表
export const getHomeHotProductList = () => {
  // 猜你喜欢商品列表
  const hotProductList: ProductType[] = [
    {
      goodId: 1,
      goodName: '多肉青提冻',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 8,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 2,
      goodName: '多肉青提冻',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 3,
      goodName: '多肉青提冻',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 4,
      goodName: '多肉青提冻',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 5,
      goodName: '多肉青提冻',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 6,
      goodName: '多肉青提冻666',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
  ]
  return hotProductList
}

// 获取菜单页 分类列表
export const getMenuLeftCategoryList = () => {
  // 左侧分类数据
  const categories: CategoryType[] = [
    { categoryId: 1, categoryName: '时令水果' },
    { categoryId: 2, categoryName: '新鲜蔬菜' },
    { categoryId: 3, categoryName: '精选肉类' },
    { categoryId: 4, categoryName: '海鲜水产' },
    { categoryId: 5, categoryName: '乳品烘焙' },
    { categoryId: 6, categoryName: '粮油调味' },
    { categoryId: 7, categoryName: '速食方便' },
    { categoryId: 8, categoryName: '休闲零食' },
    { categoryId: 9, categoryName: '酒水饮料' },
    { categoryId: 10, categoryName: '冷冻速食' },
    { categoryId: 11, categoryName: '母婴食品' },
    { categoryId: 12, categoryName: '保健滋补' },
    { categoryId: 13, categoryName: '进口食品' },
    { categoryId: 14, categoryName: '地方特产' },
    { categoryId: 15, categoryName: '有机食品' },
    { categoryId: 16, categoryName: '素食专区' },
    { categoryId: 17, categoryName: '节日礼盒' },
    { categoryId: 18, categoryName: '厨房用品' },
    { categoryId: 19, categoryName: '生鲜套餐' },
    { categoryId: 20, categoryName: '临期特惠' },
  ]
  return categories
}
// 获取菜单页 分类下产品列表
export const getMenuRightCategoryProductsList = () => {
  // 右侧商品数据
  const products: ProductType[] = [
    {
      goodId: 1743318648059707,
      goodName: '母婴食品---0',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 95,
      goodPrice: 29,
      buyCount: 12,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 11,
    },
    {
      goodId: 1743318648059553,
      goodName: '时令水果---1',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 51,
      goodPrice: 78,
      buyCount: 77,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 1,
    },
    {
      goodId: 1743318648059838,
      goodName: '厨房用品---2',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 78,
      buyCount: 35,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 18,
    },
    {
      goodId: 1743318648059281,
      goodName: '节日礼盒---3',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 56,
      goodPrice: 73,
      buyCount: 92,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 17,
    },
    {
      goodId: 1743318648059636,
      goodName: '有机食品---4',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 54,
      goodPrice: 87,
      buyCount: 53,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 15,
    },
    {
      goodId: 1743318648059163,
      goodName: '母婴食品---5',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 82,
      goodPrice: 66,
      buyCount: 64,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 11,
    },
    {
      goodId: 1743318648059313,
      goodName: '进口食品---6',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 79,
      goodPrice: 75,
      buyCount: 88,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 13,
    },
    {
      goodId: 1743318648059180,
      goodName: '精选肉类---7',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 37,
      goodPrice: 39,
      buyCount: 58,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 3,
    },
    {
      goodId: 1743318648059266,
      goodName: '乳品烘焙---8',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 89,
      goodPrice: 16,
      buyCount: 61,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 5,
    },
    {
      goodId: 1743318648059429,
      goodName: '冷冻速食---9',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 82,
      goodPrice: 42,
      buyCount: 55,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 10,
    },
    {
      goodId: 1743318648059094,
      goodName: '冷冻速食---10',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 92,
      goodPrice: 40,
      buyCount: 61,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 10,
    },
    {
      goodId: 1743318648059399,
      goodName: '节日礼盒---11',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 36,
      goodPrice: 70,
      buyCount: 69,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 17,
    },
    {
      goodId: 1743318648059007,
      goodName: '精选肉类---12',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 47,
      goodPrice: 36,
      buyCount: 16,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 3,
    },
    {
      goodId: 1743318648059149,
      goodName: '生鲜套餐---13',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 93,
      goodPrice: 46,
      buyCount: 32,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 19,
    },
    {
      goodId: 1743318648059935,
      goodName: '粮油调味---14',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 37,
      goodPrice: 42,
      buyCount: 70,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 6,
    },
    {
      goodId: 1743318648059158,
      goodName: '速食方便---15',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 19,
      goodPrice: 52,
      buyCount: 34,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 7,
    },
    {
      goodId: 1743318648059203,
      goodName: '生鲜套餐---16',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 92,
      goodPrice: 58,
      buyCount: 28,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 19,
    },
    {
      goodId: 1743318648059072,
      goodName: '速食方便---17',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 62,
      goodPrice: 39,
      buyCount: 68,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 7,
    },
    {
      goodId: 1743318648059543,
      goodName: '厨房用品---18',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 54,
      goodPrice: 18,
      buyCount: 13,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 18,
    },
    {
      goodId: 1743318648059833,
      goodName: '冷冻速食---19',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 86,
      goodPrice: 62,
      buyCount: 77,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
      categoryId: 10,
    },
  ]
  return products
}
// 获取菜单页 轮播图列表
export const getMenuSwiperImages = () => {
  const bannerList: BannerType[] = [
    {
      bannerId: 2,
      bannerUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/banner02.png',
    },
  ]
  return bannerList
}

// 获取查询页面 查询到的产品数据列表
export const getSearchProductList = () => {
  // 猜你喜欢商品列表
  const hotProductList: ProductType[] = [
    {
      goodId: 1,
      goodName: '多肉青提冻',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 8,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 2,
      goodName: '多肉青提冻',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 3,
      goodName: '多肉青提冻',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 4,
      goodName: '多肉青提冻',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 5,
      goodName: '多肉青提冻',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 6,
      goodName: '多肉青提冻666',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 7,
      goodName: '多肉青提冻666',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 8,
      goodName: '多肉青提冻666',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
  ]
  return hotProductList
}

// 获取购物车产品数据列表
export const getCartProductList = () => {
  // 猜你喜欢商品列表
  const cartProductList: ProductType[] = [
    {
      goodId: 1,
      goodName: '多肉青提冻',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 8,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 2,
      goodName: '多肉青提冻',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 3,
      goodName: '多肉青提冻',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
    {
      goodId: 4,
      goodName: '多肉青提冻',
      tags: [
        { tagId: 1, tagName: '芒果' },
        { tagId: 2, tagName: '西米露' },
        { tagId: 3, tagName: '阳光玫瑰青提' },
      ],
      goodRate: 100,
      goodPrice: 33,
      buyCount: 0,
      goodImgUrl:
        'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/cnxh_01.png',
    },
  ]
  return cartProductList
}
