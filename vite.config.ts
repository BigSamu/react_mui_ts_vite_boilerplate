import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Set the alias to the root of your "src" directory
    },
  },
  server: {
    open: true, // Open the default browser
    port: 3000, // Set the port number
    // watch: {
    //   usePolling: true, // Use polling to watch for file changes
    //   interval: 100, // Set the polling interval to 100ms
    // },
    // hmr: {
    //   overlay: true, // Show an overlay when a hot module is updated
    // }
  },
});
