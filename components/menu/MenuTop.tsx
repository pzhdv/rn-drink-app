import { View, StyleSheet } from 'react-native'
import { router } from 'expo-router'

import MyLocation from '../MyLocation'
import MySearch from '../MySearch'

// 首页头部组件
const MenuTop = () => {
  return (
    <View style={styles.flexRowJustifyBetween}>
      {/* 定位组件 */}
      <MyLocation />
      {/* 查询 */}
      <MySearch onPress={() => router.push('/ProductSearch')} />
    </View>
  )
}
const styles = StyleSheet.create({
  flexRowJustifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
})
export default MenuTop
