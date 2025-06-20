// 导入所需的 ESLint 配置工具和插件
// Expo ESLint 配置文档：https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config') // ESLint 配置辅助工具
const expoConfig = require('eslint-config-expo/flat') // Expo 项目的默认 ESLint 配置
const prettierConfig = require('eslint-config-prettier') // 关闭与 Prettier 冲突的 ESLint 规则
const prettierPlugin = require('eslint-plugin-prettier') // 将 Prettier 作为 ESLint 规则运行

// 导出一个由多个配置对象组成的数组
module.exports = defineConfig([
  // 1. 应用 Expo 的默认 ESLint 配置
  // 包含针对 Expo 项目的 React Native 和 TypeScript 规则
  expoConfig,

  // 2. 应用 Prettier 配置来禁用与 Prettier 冲突的 ESLint 规则
  // 确保 Prettier 格式化不会与 ESLint 规则冲突
  prettierConfig,

  // 3. 自定义配置，将 Prettier 集成到 ESLint 中
  {
    // 注册 Prettier 插件
    plugins: {
      prettier: prettierPlugin,
    },
    // 定义自定义规则
    rules: {
      /*
       * 规则严重级别：
       * "off" 或 0    ==>  关闭规则
       * "warn" 或 1   ==>  将规则违反显示为警告（代码仍可运行）
       * "error" 或 2  ==>  将规则违反显示为错误（代码无法运行/编译）
       */
      'prettier/prettier': 'error', // 将 Prettier 格式化规则作为 ESLint 错误强制执行
    },
  },

  // 4. 在代码检查中需要忽略的文件/目录
  {
    ignores: [
      'dist/*', // 构建输出目录
      'node_modules/*', // Node.js 依赖项
      '.expo/*', // Expo 内部文件
      'assets/fonts/*', // 不需要检查的字体资源
    ],
  },
])
