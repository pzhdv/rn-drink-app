import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

import IconFont from '@/components/IconFont'
import Colors from '@/constants/Colors'

// 返回按钮组件
const LeftArrowButton: FC<{ color?: string }> = ({ color }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => router.back()}
      style={[styles.backBtnStyle]}
    >
      <IconFont
        name="left-arrow"
        size={24}
        color={color || Colors.text.primary}
      />
    </TouchableOpacity>
  )
}

export default LeftArrowButton

const styles = StyleSheet.create({
  backBtnStyle: {
    marginTop: 16,
    marginLeft: 16,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
