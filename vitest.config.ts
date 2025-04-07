import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

// Vitest 설정
export default defineConfig({
  // 테스트 환경 설정
  test: {
    // JSDOM 환경을 사용하여 브라우저 환경을 시뮬레이션
    environment: 'jsdom',
    // 기본 제외 패턴을 사용 (node_modules 등)
    exclude: [...configDefaults.exclude],
    // 테스트의 루트 디렉토리 설정
    root: fileURLToPath(new URL('./', import.meta.url)),
  },
  // Vite 설정을 병합
  ...viteConfig
})
