import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  base: '/',
  server: {
    // Specify the hostnames Vite is allowed to respond to
    allowedHosts: [
      'prude-runny-emphatic.ngrok-free.dev'
    ]
  },
  build: {
    outDir: '../docs', // Builds to the repository root as /docs
    emptyOutDir: true,
  },
})
