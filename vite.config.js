import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://kabdulrahmann.github.io/yalla-app/',
  build: {
    rollupOptions: {
      // Add any needed external modules here
    },
  },
  plugins: [react()],
})
