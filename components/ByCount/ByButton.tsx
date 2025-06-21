import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import Colors from '@/constants/Colors'

interface IProps {
  /**
   * 背景色  默认白色
   */
  backgroundColor?: string
}

/**
 *购买按钮点击组件
 */
const ByButton: FC<PropsWithChildren<IProps>> = ({
  backgroundColor,
  children,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.buttonContainer,
        {
          backgroundColor: backgroundColor || Colors.white,
        },
      ]}
    >
      {children}
    </TouchableOpacity>
  )
}

export default ByButton

const styles = StyleSheet.create({
  buttonContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.ultralightGray,
    borderRadius: '50%',
  },
})
