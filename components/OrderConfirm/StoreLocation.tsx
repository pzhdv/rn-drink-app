import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import Colors from '@/constants/Colors'
import CustomText from '../CustomText'

interface IButtonProps {
  text: string
  isActive?: boolean
  onPress?: () => void
}
const Button: FC<IButtonProps> = ({ text, isActive, onPress }) => {
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
        style={{
          fontSize: 12,
          color: isActive ? Colors.white : Colors.text.mediumGray,
        }}
      >
        {text}
      </CustomText>
    </TouchableOpacity>
  )
}

const StoreLocation = () => {
  const [receiveType, setReceiveType] = useState<'自取' | '配送'>('自取')
  return (
    <View style={styles.storeWrapper}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={{ flex: 1, paddingTop: 23 }}>
          <CustomText fontFamily="Medium" style={styles.storeName}>
            中关村大厦店
          </CustomText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: Colors.ultralightGray,
            borderRadius: 15,
          }}
        >
          <Button
            text="自取"
            isActive={receiveType === '自取'}
            onPress={() => setReceiveType('自取')}
          />
          <Button
            text="配送"
            isActive={receiveType === '配送'}
            onPress={() => setReceiveType('配送')}
          />
        </View>
      </View>
      <CustomText style={styles.address}>
        北京市海淀区中关村大厦C座一层大堂
      </CustomText>
    </View>
  )
}

export default StoreLocation

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    height: 28,
    paddingHorizontal: 12,
    borderRadius: 14,
  },

  storeWrapper: {
    marginTop: 15,
    height: 88,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: Colors.white,
  },

  storeName: {
    fontSize: 14,
    color: Colors.text.primary,
  },
  address: {
    marginTop: 5,
    marginLeft: 2,
    fontSize: 14,
    color: Colors.text.mediumGray,
  },
})
