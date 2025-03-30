<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const recipes = [
  { id: 1, key: 'hoffmann', difficulty: 'medium' },
  { id: 2, key: 'tetsu', difficulty: 'medium' },
  { id: 3, key: 'kalita', difficulty: 'easy' },
  { id: 4, key: 'scottrao', difficulty: 'medium' },
  { id: 5, key: 'bluebottle', difficulty: 'hard' },
]
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">{{ t('recipes.title') }}</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="recipe in recipes"
        :key="recipe.id"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">{{ t(`recipes.${recipe.key}.name`) }}</h2>
          <p class="text-gray-600 mb-4">{{ t(`recipes.${recipe.key}.description`) }}</p>
          <div class="flex items-center">
            <span class="text-sm text-gray-500">{{ t('recipes.difficulty') }}:</span>
            <span
              class="ml-2 px-2 py-1 text-xs rounded-full"
              :class="{
                'bg-green-100 text-green-800': recipe.difficulty === 'easy',
                'bg-yellow-100 text-yellow-800': recipe.difficulty === 'medium',
                'bg-red-100 text-red-800': recipe.difficulty === 'hard',
              }"
            >
              {{ t(`recipes.difficulty.${recipe.difficulty}`) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
