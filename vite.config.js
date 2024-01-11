import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    assetsDir:"./static",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin.html'),
        teacher: resolve(__dirname, 'teacher.html'),
        student: resolve(__dirname, 'student.html'),
      },
    }
  },
  plugins: [vue()],
})
