<script setup>
  import ButtonComponent from '../components/Button.vue';
  import { inject } from 'vue';
  import { useRouter } from 'vue-router';

  const {toggleLoading} = inject('loading');
  const router = useRouter()

  function goHome() {
    // toggleLoading();
    router.push('/home');
  }

</script>

<template>
  <div>
    <img src='../assets/welcome.svg'/>
  </div>
  <h3>Welcome to Pokédex</h3>
  <p class="welcome-text">
    The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
  </p>
  <ButtonComponent type='basic' @click="goHome()">Get started</ButtonComponent>
</template>

<style>
  .welcome-text{
    width: 70%;
    text-align: center;
    margin: 1rem;
  }
  @media (min-width: 1024px) {
    
  }
</style>
