import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import useSafeAreaStyle from '@/hooks/useSafeAreaStyle'

import { useCart } from '@/contexts/CartContext'

import Colors from '@/constants/Colors'

import BigButton from './BigButton'
import ByCount from './ByCount'
import CustomText from './CustomText'
import IconFont from './IconFont'
import ProductImage from './ProductImage'

interface IProps {
  text: string
  isActive?: boolean
  onPress?: () => void
}

const Button: FC<IProps> = ({ text, isActive, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonStyle,
        {
          backgroundColor: isActive ? Colors.text.link : Colors.ultralightGray,
        },
      ]}
    >
      <CustomText
        style={[
          styles.buttonText,
          { color: isActive ? Colors.white : Colors.text.primary },
        ]}
      >
        {text}
      </CustomText>
    </TouchableOpacity>
  )
}

const AddToCart = () => {
  const { paddingBottom } = useSafeAreaStyle()
  const { isShowAddToCart, hideAddToCart } = useCart()
  const tempData = {
    goodName: '多肉青提冻',
    goodImgUrl:
      'https://smallhui-1300189124.cos.ap-chongqing.myqcloud.com/teaApp/xptj_01.png',
    goodDesc:
      '粒粒红柚是一种有趣的饮料，通常由芒果或西米露，牛奶或胶原脆波波，甜味剂和菜中的耐嚼质地粒粒红柚是一种有趣的饮料，通常由芒果或西米露，牛奶或胶原脆波波，甜味剂和菜中的耐嚼质地',
  }
  if (!isShowAddToCart) return
  return (
    <View style={[styles.mask]}>
      <View style={[styles.container, { paddingBottom }]}>
        {/* 关闭按钮 */}
        <TouchableOpacity onPress={hideAddToCart} style={styles.closeWrapper}>
          <IconFont name="close" size={24} />
        </TouchableOpacity>
        {/* 商品信息 */}
        <View style={styles.productInfoContainer}>
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <ProductImage
              imgUrl={tempData.goodImgUrl}
              wrapperHeight={105}
              wrapperWidth={105}
              wrapperBorderRadius={10}
              imageWidth={82}
              imageHeight={95}
            />

            <View
              style={{
                paddingTop: 30,
                justifyContent: 'center',
              }}
            >
              <CustomText fontFamily="Medium" style={{ fontSize: 20 }}>
                预计到手
              </CustomText>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <CustomText style={{ fontSize: 14, color: Colors.text.lightGray }}>
              {tempData.goodDesc}
            </CustomText>
          </View>
        </View>
        {/* 商品参数选择列表 */}
        <View style={styles.specWrapper}>
          <View style={styles.specContainer}>
            <CustomText fontFamily="Medium" style={styles.specTitleText}>
              规格
            </CustomText>
            <View style={{ flexDirection: 'row', gap: 15 }}>
              <Button text="小杯" isActive={false} />
              <Button text="中杯" isActive={false} />
              <Button text="大杯" isActive={true} />
            </View>
          </View>
          <View style={styles.specContainer}>
            <CustomText fontFamily="Medium" style={styles.specTitleText}>
              温度
            </CustomText>
            <View style={{ flexDirection: 'row', gap: 15 }}>
              <Button text="常温" isActive={false} />
              <Button text="去冰" isActive={true} />
              <Button text="加冰" isActive={false} />
            </View>
          </View>
          <View style={styles.specContainer}>
            <CustomText fontFamily="Medium" style={styles.specTitleText}>
              糖度
            </CustomText>
            <View style={{ flexDirection: 'row', gap: 15 }}>
              <Button text="全塘" isActive={false} />
              <Button text="半塘" isActive={true} />
              <Button text="微糖" isActive={false} />
            </View>
          </View>
        </View>
        {/* 底部 */}
        <View style={styles.footWrapper}>
          {/* 价格 */}
          <View style={styles.priceWrapper}>
            <View>
              <View style={styles.priceTextWrapper}>
                <CustomText style={styles.priceDescText}>预计到手 </CustomText>
                <CustomText fontFamily="Medium" style={styles.currencyText}>
                  ¥
                </CustomText>
                <CustomText fontFamily="Medium" style={styles.moneyText}>
                  30
                </CustomText>
              </View>
              <CustomText style={styles.priceDetails}>
                粒粒红柚 ¥32 + 去冰 ¥0 + 半塘 ¥0
              </CustomText>
            </View>
            <ByCount />
          </View>

          <BigButton>加入购物车</BigButton>
        </View>
      </View>
    </View>
  )
}

export default AddToCart

const styles = StyleSheet.create({
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    backgroundColor: Colors.mask,
  },

  container: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  closeWrapper: {
    position: 'absolute',
    top: 15,
    right: 15,
    height: 30,
    width: 30,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productInfoContainer: {
    paddingHorizontal: 15,
    marginTop: -30,
  },
  specWrapper: {
    paddingHorizontal: 15,
  },
  specContainer: {
    marginTop: 25,
  },
  specTitleText: {
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 15,
  },
  buttonStyle: {
    justifyContent: 'center',
    height: 36,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    color: Colors.text.primary,
  },
  footWrapper: {
    marginTop: 15,
    paddingHorizontal: 15,
    borderTopWidth: 0.5,
    borderColor: Colors.ultralightGray,
    paddingTop: 19.5,
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  priceTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  priceDescText: {
    fontSize: 14,
    color: Colors.text.primary,
  },
  currencyText: {
    color: Colors.text.primary,
    fontSize: 12,
    verticalAlign: 'bottom',
  },
  moneyText: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  priceDetails: {
    fontSize: 11,
    color: Colors.text.lightGray,
  },
})
