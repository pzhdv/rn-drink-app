import React from 'react'
import { StyleSheet, View } from 'react-native'

import Colors from '@/constants/Colors'

import CustomText from '../CustomText'

const TotalAmount = () => {
  return (
    <View
      style={{
        marginTop: 15,
        borderTopColor: Colors.ultralightGray,
        borderTopWidth: 0.5,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 14,
        }}
      >
        <CustomText style={styles.feeText}>配送费</CustomText>
        <View style={styles.moneyContainer}>
          <CustomText fontFamily="Medium" style={styles.currencyText}>
            ¥
          </CustomText>
          <CustomText fontFamily="Medium" style={styles.moneyText}>
            6
          </CustomText>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 14,
        }}
      >
        <CustomText style={styles.feeText}>小计</CustomText>
        <View style={styles.moneyContainer}>
          <CustomText
            fontFamily="Medium"
            style={[styles.currencyText, { color: Colors.text.deepCharcoal }]}
          >
            ¥
          </CustomText>
          <CustomText
            fontFamily="Medium"
            style={[
              styles.moneyText,
              { fontSize: 18, color: Colors.text.deepCharcoal },
            ]}
          >
            67
          </CustomText>
        </View>
      </View>
    </View>
  )
}

export default TotalAmount

const styles = StyleSheet.create({
  feeText: {
    fontSize: 14,
    color: Colors.text.lightGray,
  },
  moneyContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  currencyText: {
    color: Colors.text.mediumGray,
    fontSize: 12,
    marginRight: 4,
  },
  moneyText: {
    fontSize: 16,
    color: Colors.text.mediumGray,
  },
})
