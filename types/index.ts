type TagType = {
  tagId: number
  tagName: string
}

// 登录link页面操作类型
export type OperationType = 'findPassword' | 'register'
/**
 * 登录用户数据类型
 */
export type User = {
  id: string
  username: string
  email: string
  token: string
}

/**
 * 轮播图数据类型
 */
export type BannerType = {
  bannerId: number
  bannerUrl: string
}

/**
 * 商品类型
 */
export type ProductType = {
  /**
   * 商品id
   */
  goodId: number
  /**
   * 商品名称
   */
  goodName: string
  /**
   * 商品tag
   */
  tags: TagType[]
  /**
   * 商品评分
   */
  goodRate: number
  /**
   * 商品售价
   */
  goodPrice: number
  /**
   * 购买数量
   */
  buyCount?: number
  /**
   * 商品图片
   */
  goodImgUrl: string
  /**
   * 父级分类id
   */
  categoryId?: number
}

/**
 * 新品推荐类型
 */
export type NewProductType = {
  /**
   * 商品id
   */
  goodId: number
  /**
   * 商品名称
   */
  goodName: string
  /**
   * 商品图片
   */
  goodImgUrl: string
}

// 产品图片
export type ProductImageType = {
  /**
   * 图片链接
   */
  imgUrl: string
  /**
   * 图片盒子高度
   */
  wrapperHeight: number
  /**
   * 图片盒子宽度
   */
  wrapperWidth: number
  /**
   * 图片盒子圆角
   */
  wrapperBorderRadius: number
  /**
   * 图片高度
   */
  imageHeight: number
  /**
   * 图片宽度
   */
  imageWidth: number
}

/**
 * 布局类型
 */
export type SectionLayout = {
  categoryId: number
  offset: number
  height: number
}

/**
 * 分类类型
 */
export type CategoryType = {
  categoryId: number
  categoryName: string
}
