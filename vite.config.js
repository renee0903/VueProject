import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],

  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
})