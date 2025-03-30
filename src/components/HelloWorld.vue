<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings bg-gray-100 p-8 rounded-lg shadow-md">
    <h1 class="text-4xl font-bold text-green-600 mb-4">{{ msg }}</h1>
    <h3 class="text-gray-700">
      You've successfully created a project with
      <a
        href="https://vite.dev/"
        target="_blank"
        rel="noopener"
        class="text-blue-500 hover:text-blue-700"
        >Vite</a
      >
      +
      <a
        href="https://vuejs.org/"
        target="_blank"
        rel="noopener"
        class="text-blue-500 hover:text-blue-700"
        >Vue 3</a
      >. What's next?
    </h3>
  </div>
</template>
