import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        // Used for local testing:
        // target: "http://localhost:5044",
        target: "https://aisc-platform-api.fly.dev",
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
