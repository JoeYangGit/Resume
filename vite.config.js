import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
   // 打包配置
  build: {
    outDir: 'docs', // 输出目录改为 docs
    emptyOutDir: true, // 打包前清空目录
    assetsDir: 'assets' // 静态资源目录（默认即可）
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
