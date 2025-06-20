import { createIconSet } from '@expo/vector-icons'
import iconfont from '@/assets/fonts/iconfont/iconfont.json' // 引入Icon字体数据

// 加工数据
const glyphMap: any = {}
const glyphs = iconfont.glyphs || []
for (let i = 0; i < glyphs.length; i++) {
  glyphMap[glyphs[i].font_class] = glyphs[i].unicode_decimal
}

// 数据、字体名称、字体文件名称
export default createIconSet(glyphMap, 'Iconfont', 'iconfont.ttf') //自定义Icon组件
