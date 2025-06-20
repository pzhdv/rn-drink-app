import React, { FC } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

import Colors from '@/constants/Colors'

import CustomText from './CustomText'

interface IProps {
  /**
   * 购买数量
   */
  buyCount?: number
  /**
   * 定位样式
   */
  style?: StyleProp<ViewStyle>
}

const Round: FC<IProps> = (props: IProps) => {
  return props.buyCount ? (
    <View style={[styles.round, props.style]}>
      <CustomText fontFamily="Medium" style={styles.buyCountText}>
        {props.buyCount}
      </CustomText>
    </View>
  ) : null
}

export default Round

const styles = StyleSheet.create({
  round: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: Colors.fieryOrange,
    position: 'absolute',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyCountText: {
    color: Colors.white,
    fontSize: 10,
  },
})
