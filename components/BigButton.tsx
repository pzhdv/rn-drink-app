import React, { FC, PropsWithChildren } from 'react'
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'

import Colors from '@/constants/Colors'

import CustomText from './CustomText'

interface IProps {
  activeOpacity?: number
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  onPress?: () => void
}

const BigButton: FC<PropsWithChildren<IProps>> = props => {
  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity}
      style={[styles.buttonWrapper, props.style]}
      disabled={props.disabled}
      onPress={props.onPress}
    >
      <CustomText style={[styles.buttonText, props.textStyle]}>
        {props.children}
      </CustomText>
    </TouchableOpacity>
  )
}

export default BigButton

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: Colors.button.primaryBg,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.button.primaryText,
    fontSize: 16,
  },
})
