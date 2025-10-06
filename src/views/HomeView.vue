<script setup>
import { inject, onMounted } from 'vue'
import { pokeApi } from '../services/api'
import BottomBar from '@/components/BottomBar.vue'

const { toggleLoading } = inject('loading')
let list = []

onMounted(() => {
  list = pokeApi.getList()
  toggleLoading(false)
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <BottomBar></BottomBar>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
