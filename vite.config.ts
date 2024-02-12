import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@util': path.resolve(__dirname, './src/util/'),
      '@components': path.resolve(__dirname, './src/components/'),
    },
  },
  plugins: [react()]
})
