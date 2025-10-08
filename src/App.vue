<script setup lang="ts">
import { RouterView } from 'vue-router'
import Loader from './components/Loader.vue'
import { ref, provide, KeepAlive } from 'vue'

const loading = ref<boolean>(false)

const toggleLoading = (state: boolean | null) => {
  loading.value = state ?? !loading.value
}

provide('loading', { loading, toggleLoading })
</script>

<template>
  <Loader v-if="loading" />
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
</template>
