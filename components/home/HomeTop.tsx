import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import MyLocation from '../MyLocation'
import QRScanner from '../QRScanner'

const HomeTop = () => {
  return (
    <View style={styles.flexRowJustifyBetween}>
      {/* 定位组件 */}
      <MyLocation />
      {/* 扫一扫 */}
      <QRScanner onPress={() => router.push('/QRcodeScanner')} />
    </View>
  )
}

export default HomeTop

const styles = StyleSheet.create({
  flexRowJustifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
})
