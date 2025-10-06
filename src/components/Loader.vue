<script setup lang="ts">
    import IconPokeball from './icons/IconPokeball.vue';
</script>

<template>
  <div class="loader">
    <IconPokeball class="bounce"/>
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}

.bounce {
  animation: bounce 1s ease infinite;
}
@keyframes bounce {
    70% { transform:translateY(0%); }
    80% { transform:translateY(-15%); }
    90% { transform:translateY(0%); }
    95% { transform:translateY(-7%); }
    97% { transform:translateY(0%); }
    99% { transform:translateY(-3%); }
    100% { transform:translateY(0); }
}
</style>
