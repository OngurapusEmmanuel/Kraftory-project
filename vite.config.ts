import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // keep root for ngrok
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    cors: true,

    // 👇 Allow your ngrok domain
    allowedHosts: [
      'a32e-154-159-238-33.ngrok-free.app'
    ],

    // 👇 Fix HMR over HTTPS tunnel
    hmr: {
      protocol: 'wss',
      host: 'a32e-154-159-238-33.ngrok-free.app ',
      clientPort: 443
    }
  }
})