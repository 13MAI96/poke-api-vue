<script setup lang="ts">
import Button from '../components/Button.vue'
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const { toggleLoading } = inject<any>('loading')
const router = useRouter()

function goHome() {
  toggleLoading()
  router.push('/home')
}
</script>

<template>
  <div class="welcome-container">
    <img src="../assets/welcome.svg" />
    <h3>Welcome to Pokédex</h3>
    <p class="welcome-text">
      The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the
      Pokémon world.
    </p>
    <Button type="basic" @click="goHome()">Get started</Button>
  </div>
</template>

<style>
.welcome-container {
  height: 100svh;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .welcome-text {
    width: 70%;
    text-align: center;
    margin: 1rem;
  }
}
</style>
