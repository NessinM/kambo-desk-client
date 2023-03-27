import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
// https://vitejs.dev/config/
export default defineConfig({
  server : {
    port: 7958,
    open: '/'
  },
  plugins: [vue()],
  define : { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  optimizeDeps: {
    entries: [
      './src/**/*.vue',
    ]
  }
})
