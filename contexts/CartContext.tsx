import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  FC,
  useEffect,
} from 'react'
import { usePathname } from 'expo-router'

// Context 类型
type CartContextType = {
  isShowCartList: boolean
  showCartList: () => void
  hideCartList: () => void
}

// 创建 Context
const CartContext = createContext<CartContextType | undefined>(undefined)

// Provider 组件 页面路径变化 隐藏购物车列表展示
export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isShowCartList, setIsShowCartList] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    hideCartList()
  }, [pathname])
  // 显示购物车函数
  const showCartList = () => setIsShowCartList(true)
  // 隐藏购物车函数
  const hideCartList = () => setIsShowCartList(false)
  return (
    <CartContext.Provider
      value={{ isShowCartList, showCartList, hideCartList }}
    >
      {children}
    </CartContext.Provider>
  )
}

// 自定义 Hook
export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart 必须在 CartProvider 内使用')
  }
  return context
}
