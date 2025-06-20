import { SafeAreaView, StyleSheet } from 'react-native'
import { router } from 'expo-router'

import { useAuth } from '@/contexts/AuthContext'

import BigButton from '@/components/BigButton'

export default function ProfileScreen() {
  const { logout } = useAuth()

  const handleLoginOut = async () => {
    try {
      await logout()
      router.replace('/LoginScreen')
    } catch (error) {
      console.log('退出失败', error)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <BigButton onPress={handleLoginOut} activeOpacity={1}>
        退出登录
      </BigButton>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
