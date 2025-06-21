import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthProvider } from '@/contexts/AuthContext'
import { CartProvider } from '@/contexts/CartContext'

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // 字体名称 字体文件路径
    'PingFang-SC-Semibold': require('@/assets/fonts/base/PingFangSC-Semibold.ttf'),
    'PingFang-SC-Regular': require('@/assets/fonts/base/PingFangSC-Regular.ttf'),
    'PingFang-SC-Medium': require('@/assets/fonts/base/PingFangSC-Medium.ttf'),
    Iconfont: require('@/assets/fonts/iconfont/iconfont.ttf'), //导入Icon字体
  })

  useEffect(() => {
    SplashScreen.preventAutoHideAsync() // 防止启动屏自动隐藏
  }, [])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync() // 字体加载完成后隐藏启动屏
    } else if (error) {
      console.error('字体加载失败:', error)
      SplashScreen.hideAsync() // 可选：即使加载失败，也可以隐藏启动屏
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null // 字体加载中，返回 null 防止渲染
  }

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <CartProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </CartProvider>
      </AuthProvider>
    </SafeAreaProvider>
  )
}
