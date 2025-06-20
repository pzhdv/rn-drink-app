import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import type { User } from '@/types'

// Context 类型
type AuthContextType = {
  user: User | null
  isLoading: boolean
  saveLoginUser: (user: User) => Promise<void>
  logout: () => Promise<void>
}

// 创建 Context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Provider 组件
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // 初始化时检查本地存储的登录状态
  useEffect(() => {
    const loadUserData = async () => {
      try {
        console.log('正在从存储加载的用户数据')
        const userData = await AsyncStorage.getItem('user')
        if (userData) {
          setUser(JSON.parse(userData))
        }
      } catch (error) {
        console.error('从存储加载的用户数据失败:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUserData()
  }, [])

  // 登录函数
  const saveLoginUser = async (userData: User) => {
    try {
      console.log('登录成功 正在保存的用户数据:', userData)
      await AsyncStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
    } catch (error) {
      console.error('从存储保存用户数据失败:', error)
      throw error
    }
  }

  // 退出函数
  const logout = async () => {
    try {
      console.log('退出函数')
      await AsyncStorage.removeItem('user')
      setUser(null)
    } catch (error) {
      console.error('从存储删除用户数据失败:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, saveLoginUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// 自定义 Hook
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth 必须在 AuthProvider 内使用')
  }
  return context
}
