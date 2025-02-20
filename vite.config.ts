import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Adjust if not using React

export default defineConfig({
  plugins: [react()],
  base: '/MusicSettingsApp/' // Must match your repo name
});
