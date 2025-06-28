import { Redirect } from 'expo-router'
import { ActivityIndicator, View } from 'react-native'

import { useAuth } from '@/contexts/AuthContext'

export default function Index() {
  const { user, isLoading } = useAuth()
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (!user) {
    return <Redirect href="/LoginScreen" />
  } else {
    // return <Redirect href="/HomeScreen" />
    return <Redirect href="/DeliverySuccess" />
    // return <Redirect href="/ProductSearch" />
  }
}
