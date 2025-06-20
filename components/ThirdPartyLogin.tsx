import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import Colors from '@/constants/Colors'

import IconFont from './IconFont'
import CustomText from './CustomText'
/**
 *第三方登录组件
 */
const ThirdPartyLogin = () => {
  return (
    <View style={styles.thirdPartyLoginContainer}>
      <View style={styles.labelContainer}>
        <View style={styles.labelLine}></View>
        <CustomText style={styles.labelText}>第三方登录</CustomText>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="weixin" size={22} color="#069607" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <IconFont name="QQ" size={22} color="#3D7FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <IconFont name="weibo" size={22} color="#E05D06" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <IconFont name="pingguo" size={22} color={'#000000'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  thirdPartyLoginContainer: {
    paddingHorizontal: 20,
    height: 85,
    justifyContent: 'space-between',
  },
  labelContainer: {
    width: '100%',
    position: 'relative',
    alignItems: 'center',
  },
  labelLine: {
    height: 0.5,
    width: '100%',
    backgroundColor: Colors.thirdPartyLogin.lineColor,
    position: 'absolute',
    top: '50%',
  },
  labelText: {
    paddingHorizontal: 18,
    fontSize: 14,
    fontWeight: 400,
    zIndex: 1,
    color: Colors.text.secondary,
    backgroundColor: Colors.thirdPartyLogin.textBg,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: Colors.thirdPartyLogin.iconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default ThirdPartyLogin
