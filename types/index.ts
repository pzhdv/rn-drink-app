// 登录link页面操作类型
export type OperationType = 'findPassword' | 'register'
/**
 * 登录用户数据类型
 */
export type User = {
  id: string
  username: string
  email: string
  token: string
}
