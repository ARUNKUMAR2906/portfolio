import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',          // Bind to 0.0.0.0 to make the server accessible
    port: 5173, // Use the PORT environment variable or fallback to 5173
  },
});
