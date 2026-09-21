import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        info: resolve(import.meta.dirname, 'info/index.html'),
        contact: resolve(import.meta.dirname, 'contact/index.html'),
        works: resolve(import.meta.dirname, 'works/index.html'),
        jesko_hero: resolve(import.meta.dirname, 'jesko_hero/index.html')
      }
    }
  }
})
