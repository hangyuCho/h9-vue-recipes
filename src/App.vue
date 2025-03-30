<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const changeLocale = (lang: string) => {
  locale.value = lang
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex items-center justify-between">
          <div class="flex items-center space-x-8">
            <RouterLink to="/" class="text-2xl font-bold text-brown-800">H-9 Coffee</RouterLink>
            <div class="hidden md:flex space-x-6">
              <RouterLink
                to="/"
                class="px-3 py-1 rounded-md text-sm font-medium"
                :class="
                  $route.path === '/'
                    ? 'bg-indigo-200 text-indigo-500'
                    : 'text-indigo-500 hover:text-indigo-600'
                "
                >{{ t('nav.home') }}</RouterLink
              >
              <RouterLink
                to="/recipes"
                class="px-3 py-1 rounded-md text-sm font-medium"
                :class="
                  $route.path === '/recipes'
                    ? 'bg-indigo-200 text-indigo-500'
                    : 'text-indigo-500 hover:text-indigo-600'
                "
                >{{ t('nav.recipes') }}</RouterLink
              >
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button
              @click="changeLocale('ko')"
              class="px-3 py-1 rounded-md text-sm font-medium"
              :class="
                locale === 'ko'
                  ? 'bg-indigo-200 text-indigo-500'
                  : 'text-indigo-500 hover:text-indigo-600'
              "
            >
              한국어
            </button>
            <button
              @click="changeLocale('ja')"
              class="px-3 py-1 rounded-md text-sm font-medium"
              :class="
                locale === 'ja'
                  ? 'bg-indigo-200 text-indigo-500'
                  : 'text-indigo-500 hover:text-indigo-600'
              "
            >
              日本語
            </button>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>
