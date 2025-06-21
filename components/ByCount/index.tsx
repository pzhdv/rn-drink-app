import React from 'react'
import { View } from 'react-native'

import Colors from '@/constants/Colors'

import IconFont from '../IconFont'
import ByButton from './ByButton'
import CustomText from '../CustomText'

const ByCount = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <ByButton>
        <IconFont name="jian" size={16} color={Colors.text.mediumGray} />
      </ByButton>
      <CustomText style={{ color: Colors.text.lightGray, fontSize: 12 }}>
        1
      </CustomText>
      <ByButton backgroundColor={Colors.text.link}>
        <IconFont name="jia" size={16} color={Colors.white} />
      </ByButton>
    </View>
  )
}

export default ByCount
