import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import Colors from '@/constants/Colors'

import BackIconButton from './BackIconButton'
import CustomText from './CustomText'

const HeaderBar: FC<{ title?: string }> = ({ title }) => {
  return (
    <View style={styles.container}>
      <BackIconButton />
      <View style={styles.header}>
        <CustomText fontFamily="Medium" style={styles.headerText}>
          {title}
        </CustomText>
      </View>
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: Colors.text.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
