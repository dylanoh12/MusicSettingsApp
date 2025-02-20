import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/dylanoh12/MusicSettingsApp.git', // Change 'vite-app' to your repository name
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})
