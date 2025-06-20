import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '@/constants/Colors'

import CustomText from './CustomText'
import Round from './Round'

/**
 * 产品规格按钮组件
 */
const SpecButton: FC<{ buyCount?: number }> = props => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.specWrapper}>
      <CustomText fontFamily="Medium" style={styles.specText}>
        选规格
      </CustomText>
      <Round
        buyCount={props.buyCount}
        style={{
          right: 0,
          top: -5,
        }}
      />
    </TouchableOpacity>
  )
}

export default SpecButton

const styles = StyleSheet.create({
  specWrapper: {
    position: 'relative',
    backgroundColor: Colors.button.primaryBg,
    width: 47,
    height: 22,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  specText: {
    color: Colors.white,
    fontSize: 11,
  },
})
