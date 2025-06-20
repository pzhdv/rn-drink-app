import { useSafeAreaInsets } from 'react-native-safe-area-context'

/**
 * 封装安全区域样式
 */
const useSafeAreaStyle = () => {
  const insets = useSafeAreaInsets()
  const safeAreaStyle = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  }
  return safeAreaStyle
}

export default useSafeAreaStyle
