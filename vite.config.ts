import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const tunnelHost = env.VITE_DEV_TUNNEL_HOST

  return {
    base: '/',
    plugins: [react()],
    server: {
      host: true,
      port: 5173,
      strictPort: true,
      cors: true,
      // Set VITE_DEV_TUNNEL_HOST in .env to allow a dev tunnel (e.g. ngrok) host + HMR over it
      ...(tunnelHost
        ? {
            allowedHosts: [tunnelHost],
            hmr: { protocol: 'wss', host: tunnelHost, clientPort: 443 },
          }
        : {}),
    },
  }
})
