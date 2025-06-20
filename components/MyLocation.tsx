import * as Location from 'expo-location' // 定位插件
import React, { useEffect, useState } from 'react'
import {
  Alert,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'

import Colors from '@/constants/Colors'

import CustomText from './CustomText'
import IconFont from './IconFont'

// 获取位置信息组件
const MyLocation = () => {
  const [currentAddress, setCurrentAddress] = useState('正在获取中...')

  useEffect(() => {
    getCurrentLocation()
  }, [])

  //get current location
  const getCurrentLocation = async () => {
    try {
      // const enabled = await Location.hasServicesEnabledAsync() // 检查手机系统定位服务是否开启 true:开启状态 false:未开启
      // 检查该app定位权限是否开启
      // requestAlwaysAndWhenInUsePermissionsAsync 前后台切换都可以使用
      const { status } = await Location.requestForegroundPermissionsAsync() //在使用app期间查询是否开启定位权限
      // console.log('status,', status) // denied granted undetermined
      if (status !== 'granted') {
        Alert.alert(
          '定位权限未开启',
          '为了给您提供更好的服务，我们需要获取您的位置权限。请在设置中手动开启。',
          [
            {
              text: '暂不',
              onPress: () => console.log('暂不开启定位权限'),
              style: 'cancel',
            },
            { text: '去设置', onPress: () => Linking.openSettings() },
          ],
        )
      }

      //获取当前位置经纬度
      const { coords } = await Location.getCurrentPositionAsync()

      if (coords) {
        // latitude:纬度 longitude:经度
        const { latitude, longitude } = coords
        //通过经纬度获取位置信息
        const response = await Location.reverseGeocodeAsync({
          latitude, //经度
          longitude, // 纬度
        })
        // 位置信息
        // const tempLocationInfo1 = [
        //   {
        //     country: '中国',
        //     region: '贵州省',
        //     city: '安顺市',
        //     district: '西秀区',
        //     street: null, // 街道名称
        //     name: '七眼桥镇',
        //     isoCountryCode: 'CN',
        //     postalCode: null, // 邮政编码
        //     streetNumber: null, // 街道号码
        //     subregion: null, // 次区域
        //     timezone: 'Asia/Shanghai', // 时区
        //   },
        // ]
        // const tempLocationInfo2 = [{country: '中国',region: '贵州省',city: '贵阳市',district: '花溪区',street: '栋青路',name: '贵州师范大学东校区',isoCountryCode: 'CN',postalCode: null,streetNumber: null,subregion: null,timezone: 'Asia/Shanghai'}]

        for (const item of response) {
          const address = `${item.city},${item.name}`
          setCurrentAddress(address)
        }
      }
    } catch (error) {
      console.log('获取位置出错', error)
      setCurrentAddress('获取位置失败')
    }
  }
  return (
    <View style={styles.locationWrapper}>
      <IconFont name="dingwei" color={Colors.text.primary} size={20} />
      <TouchableOpacity activeOpacity={1} onPress={getCurrentLocation}>
        <CustomText fontFamily="Medium" style={styles.locationText}>
          {currentAddress}
        </CustomText>
      </TouchableOpacity>
    </View>
  )
}

export default MyLocation

const styles = StyleSheet.create({
  locationWrapper: {
    gap: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: Colors.text.primary,
    fontSize: 16,
  },
})
