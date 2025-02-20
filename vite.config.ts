import { defineConfig } from 'vite';

export default defineConfig({
  base: 'https://github.com/dylanoh12/MusicSettingsApp.git', // Ensure this matches your GitHub repo name exactly
  build: {
    outDir: 'dist',
  },
});
