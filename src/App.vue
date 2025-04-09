<template>
  <HomeView :getAccessToken="getAccessToken" />
</template>
<script setup lang="ts">
import HomeView from '@/views/HomeView.vue';

const getAccessToken = () => {
  return Promise.resolve('accessToken')
}
</script>


