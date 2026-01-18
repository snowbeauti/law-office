import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/law-office/',   // 🔥 GitHub repo 이름과 정확히 동일
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
