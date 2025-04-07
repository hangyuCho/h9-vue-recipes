import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  define: command === 'build' ? {
    'process.env.NODE_ENV': JSON.stringify('production')
  } : {},
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-')
        }
      },
      customElement: command === 'build'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'H9VueRecipes',
      fileName: (format) => `h9-vue-recipes.${format}.js`,
      formats: ['es', 'umd']
    },
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
}))
