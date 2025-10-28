import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Fall2025-WebApps/midterm/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})
