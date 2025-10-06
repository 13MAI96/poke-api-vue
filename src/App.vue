<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Button from './components/Button.vue'
  import Loader from './components/Loader.vue'
  import { ref, provide } from 'vue'

  const loading = ref(false);

  function toggleLoading() {
    loading.value = !loading.value
  }

  provide('loading', {loading, toggleLoading});

</script>

<template>
  <Loader v-if="loading"/>

  <RouterView v-else/>
</template>

<!-- <template >
 
  <Button text="Get started" type='basic' ></Button>
  <Button text="All" type='menu' isDisabled></Button>
  <Button text="Favorites" type='fav' isDisabled></Button>
  <Button text="All" type='menu'></Button>
  <Button text="Favorites" type='fav'></Button>

  
</template> -->