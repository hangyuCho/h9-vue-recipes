import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

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
    }),
    dts({
      include: ['src/**/*.ts', 'src/**/*.vue'],
      outputDir: 'dist/types',
      tsConfigFilePath: 'tsconfig.json'
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
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
}))
