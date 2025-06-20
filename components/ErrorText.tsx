import React, { PropsWithChildren } from 'react'
import { StyleSheet } from 'react-native'

import Colors from '@/constants/Colors'

import CustomText from './CustomText'

const ErrorText: React.FC<PropsWithChildren> = props => {
  return <CustomText style={styles.errorText}>{props.children}</CustomText>
}

export default ErrorText

const styles = StyleSheet.create({
  errorText: {
    color: Colors.text.error,
    paddingVertical: 5,
  },
})
