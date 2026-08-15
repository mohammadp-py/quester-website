import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['.monkeycode-ai.live']
  },
  optimizeDeps: {
    include: ['@react-three/fiber', '@react-three/drei', 'zustand', 'use-sync-external-store', 'use-sync-external-store/shim', 'use-sync-external-store/shim/with-selector']
  }
})
