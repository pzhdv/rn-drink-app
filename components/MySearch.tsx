import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'

import IconFont from '@/components/IconFont'

interface IProps {
  /**
   * 图标大小 默认20
   */
  size?: number
  /**
   *按下事件
   */
  onPress?: () => void
}
// 查询图标按钮组件
const MySearch: FC<IProps> = props => {
  const iconSize = props.size || 20
  return (
    <TouchableOpacity activeOpacity={1} onPress={props.onPress}>
      <IconFont name="sousuo" size={iconSize} />
    </TouchableOpacity>
  )
}

export default MySearch
