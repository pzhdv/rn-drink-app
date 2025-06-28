import { Camera, CameraView } from 'expo-camera'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useRef, useState } from 'react'
import {
  Alert,
  Animated,
  Dimensions,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import useSafeAreaStyle from '@/hooks/useSafeAreaStyle'

import LeftArrowButton from '@/components/LeftArrowButton'

const { width, height } = Dimensions.get('window')

const scanBoxHeight = width * 0.6
const scanTopHeight = (height - scanBoxHeight) / 2
const scanLeftWidth = (width - scanBoxHeight) / 2

// 动画的高度
const animatedHeight = { startHeight: 0, endHeight: scanBoxHeight }

export default function QRcodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [scanned, setScanned] = useState(false)
  const safeAreaStyle = useSafeAreaStyle()
  const animationValue = useRef(
    new Animated.Value(animatedHeight.startHeight),
  ).current

  useEffect(() => {
    const init = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    }
    init()
  }, [])

  useEffect(() => {
    startAnimation()
  }, [])

  const startAnimation = () => {
    Animated.timing(animationValue, {
      toValue: animatedHeight.endHeight,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      animationValue.setValue(animatedHeight.startHeight)
      startAnimation()
    })
  }
  const lineTop = animationValue.interpolate({
    inputRange: [animatedHeight.startHeight, animatedHeight.endHeight],
    outputRange: [animatedHeight.startHeight, animatedHeight.endHeight],
  })

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string
    data: string
  }) => {
    setScanned(true)
    alert(`扫描到的类型: ${type}, 数据: ${data}`)
    // Linking.openURL(data) // 跳转web网页
  }

  if (hasPermission === null) {
    return (
      <SafeAreaView>
        <Text>正在请求相机权限...</Text>
      </SafeAreaView>
    )
  }
  if (hasPermission === false) {
    Alert.alert(
      '相机权限未开启',
      '为了给您提供更好的服务，我们需要获取您的相机权限,请在设置中手动开启。',
      [
        {
          text: '拒绝',
          onPress: () => console.log('暂不开启相机权限'),
          style: 'cancel',
        },
        { text: '设置', onPress: () => Linking.openSettings() },
      ],
    )
    return <View />
  }

  return (
    <View style={styles.permissionContainer}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
        style={StyleSheet.absoluteFillObject}
      />

      {/* 上下左右填充模糊背景 */}
      <View style={styles.shadowTopBox}></View>
      <View style={styles.shadowLeftBox}></View>
      <View style={styles.shadowRightBox}></View>
      <View style={styles.shadowBottomBox}></View>
      {/* 二维码框 */}
      <TouchableOpacity
        style={styles.scanBox}
        activeOpacity={1}
        onPress={() => setScanned(false)}
      >
        <Animated.View style={{ top: lineTop }}>
          <LinearGradient
            colors={['rgba(0, 255, 0, 0.1)', 'rgba(255, 255, 255, 0.5)']}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.scanLine}
          />
        </Animated.View>
      </TouchableOpacity>
      <View
        style={{ paddingTop: safeAreaStyle.paddingTop, position: 'absolute' }}
      >
        <LeftArrowButton color="#fff" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  permissionContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0', // 权限提示界面背景色
  },
  shadowTopBox: {
    height: scanTopHeight,
    backgroundColor: 'rgba(128,128,128,0.4)',
  },
  shadowLeftBox: {
    width: scanLeftWidth,
    height: height - scanTopHeight,
    backgroundColor: 'rgba(128,128,128,0.4)',
  },
  shadowRightBox: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width - scanLeftWidth - scanBoxHeight,
    height: height - scanTopHeight,
    backgroundColor: 'rgba(128,128,128,0.4)',
  },
  shadowBottomBox: {
    position: 'absolute',
    bottom: 0,
    left: scanLeftWidth,
    width: scanBoxHeight,
    height: height - scanTopHeight - scanBoxHeight,
    backgroundColor: 'rgba(128,128,128,0.4)',
  },
  scanBox: {
    position: 'absolute',
    width: scanBoxHeight,
    height: scanBoxHeight,
    top: scanTopHeight,
    left: scanLeftWidth,
  },
  scanLine: {
    height: 2,
    backgroundColor: 'gay',
  },
})
