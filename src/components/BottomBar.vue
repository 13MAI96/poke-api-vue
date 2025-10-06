<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
  <div class="bottom-bar">
    <Button type="menu" isDisabled>All</Button>
    <Button type="fav">Favorites</Button>
  </div>
</template>

<style scoped>
.bottom-bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  box-shadow: 0 -5px 4px var(--color-border);
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
