<script setup>
import { inject, onMounted } from 'vue'
import { pokeApi } from '../services/api'
import BottomBar from '@/components/BottomBar.vue'
import Search from '@/components/Search.vue'

const { toggleLoading } = inject('loading')
let list = []

onMounted(() => {
  list = pokeApi.getList()
  toggleLoading(false)
})
</script>

<template>
  <div class="home-container">
    <Search></Search>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </div>
  <BottomBar></BottomBar>
</template>

<style>
.about {
  height: calc(100% - 4rem - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
}
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: calc(100% - 80px);
  box-sizing: border-box;
  padding-top: 2rem;
}
</style>
