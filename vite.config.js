import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'todo-list',build: {
    outDir: 'build', // Ensure this matches your actual build directory
    // ...
  },
  publicPath: '',
  plugins: [react()],
})
