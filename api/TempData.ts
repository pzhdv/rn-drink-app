import { BannerType, NewProductType, ProductType } from '@/types'
/**
 *页面测试数
 */
// 获取首页轮播图列表
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

// 获取首页新品推荐数据列表
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

// 获取首页热门产品数据列表
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
