import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'
import { svgrConfig } from './configs/svgr.config'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: svgrConfig
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/App'),
      '@pages': path.resolve(__dirname, './src/Pages'),
      '@widgets': path.resolve(__dirname, './src/Widgets'),
      '@features': path.resolve(__dirname, './src/Features'),
      '@shared': path.resolve(__dirname, './src/Shared'),
      '@ui': path.resolve(__dirname, './src/Shared/UI'),
      '@svg': path.resolve(__dirname, './src/Shared/assets/svg'),
      '@utils': path.resolve(__dirname, './src/Shared/utils')
    }
  }
})
