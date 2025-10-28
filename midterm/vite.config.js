import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'Fall2025-WebApps',
  plugins: [react()],
  server: {
    host: true, // This exposes the server to the network
    port: 5173, // Or your preferred port
  },
})
