/**
 * 定义应用中用到的各种颜色常量
 */
const Colors = {
  white: '#fff',
  jungleGreen: '#2B9F93', //丛林绿
  lightGray: '#D8D8D8', //浅灰色
  mintyGray: '#F0F5F4', // 浅青灰色
  ultralightGray: '#F7F7F7', // 极浅灰色
  fieryOrange: '#FE5509', // 橙红色
  mask: 'rgba(0,0,0,0.6)', // 遮罩层颜色
  // 文本颜色相关
  text: {
    primary: '#121212', // 主要文本颜色，比如标题等重要文本
    secondary: '#A6A6A6', // 次要文本颜色，像提示性文字等
    mediumGray: '#606266', // 中灰
    lightGray: '#909399', //浅灰
    deepCharcoal: '#303133', //深炭灰
    glacier: '#909399', //冰川灰
    link: '#2B9F93', // 链接类文本颜色，如“忘记密码”“免密码登录”这类可点击文本
    error: 'red',
  },

  // 输入框相关颜色
  input: {
    bg: '#FAFAFA', // 输入框背景颜色
    border: '#E0E0E0', // 输入框边框颜色（假设这里图片中输入框没明显边框，实际可按需调整，比如一些设计会有淡边框）
    placeholderTextColor: '#B8B8B8',
  },

  // 按钮相关颜色
  button: {
    primaryBg: '#2B9F93', // 主按钮背景颜色，像“登录”按钮（根据你提供的图片，这里可改为类似青绿色，比如 '#00BFA5' 更贴近图片中按钮颜色）
    primaryText: '#FFFFFF', // 主按钮文本颜色
  },

  // 第三方登录图标背景色示例（可根据实际设计扩展更多颜色）
  thirdPartyLogin: {
    textBg: '#fff',
    iconBg: '#f7f7f7', // 第三方登录图标背景色
    lineColor: '#D8D8D8',
  },

  // 轮播图
  swiper: {
    dotColor: '#ccc', //swiper 圆点颜色
    activeDotColor: '#fff', //swiper 激活圆点颜色
  },

  // tabbar栏
  tabbar: {
    activeTextColor: '#2B9F93', //tabber栏选中字体颜色
    textColor: '#909399', // tabbar栏字体颜色
  },
}

export default Colors
