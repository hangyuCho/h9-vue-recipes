<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-12">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <p class="text-xl text-gray-900 max-w-2xl mx-auto">
          {{ t('home.tagline') }}
        </p>
      </div>

      <!-- Features Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            {{ t('home.features.recipes.title') }}
          </h2>
          <p class="text-gray-900">{{ t('home.features.recipes.description') }}</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            {{ t('home.features.tips.title') }}
          </h2>
          <p class="text-gray-900">{{ t('home.features.tips.description') }}</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            {{ t('home.features.community.title') }}
          </h2>
          <p class="text-gray-900">{{ t('home.features.community.description') }}</p>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <router-link
          to="/recipes"
          class="inline-block bg-brown-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-brown-700 transition-colors duration-300"
        >
          {{ t('home.cta') }}
        </router-link>
      </div>
    </div>
  </main>
</template>
