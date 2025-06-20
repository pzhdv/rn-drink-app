import { Platform } from 'react-native'
import { Tabs } from 'expo-router'

import IconFont from '@/components/IconFont'
import GlobalColor from '@/constants/Colors'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // 当键盘弹出时，隐藏底部标签栏
        tabBarHideOnKeyboard: true,
        // 是否显示导航栏
        headerShown: false,
        // 激活字体颜色
        tabBarActiveTintColor: GlobalColor.tabbar.activeTextColor,
        // 未激活状态的字体颜色
        tabBarInactiveTintColor: GlobalColor.tabbar.textColor,
        // 字体样式
        tabBarLabelStyle: {
          fontFamily: 'PingFang-SC-Regular', // 字体样式
          fontSize: 12,
          fontWeight: '500',
          marginBottom: Platform.OS === 'ios' ? 0 : 5, // 根据平台调整底部间距
        },
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: '首页',
          tabBarIcon: ({ color }) => (
            <IconFont name="shouye-copy-copy" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="MenuScreen"
        options={{
          title: '菜单',
          tabBarIcon: ({ color }) => (
            <IconFont name="caidan" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="MembershipCardScreen"
        options={{
          title: '自由卡',
          tabBarIcon: ({ color }) => (
            <IconFont name="a-44tubiao-44" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => (
            <IconFont name="wode" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
