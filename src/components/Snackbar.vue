<script setup lang="ts">
import { onMounted } from 'vue'

const emit = defineEmits(['close'])

onMounted(() => {
  setTimeout(() => emit('close'), 2000)
})
</script>

<template>
  <div class="snackbar">
    <div class="snackbar-container">
      <div class="snackbar-info">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.snackbar {
  position: fixed;
  bottom: 15px;
  right: calc(50vw - 125px);
  width: 250px;
  height: 30px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  .snackbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 250px;
    height: 30px;
    background-color: #c2c2c2;
    box-sizing: border-box;
    font-size: 16px;
  }
}
@media (min-width: 640px) {
  .popup {
    .popup-container {
      width: 570px;
    }
  }
}
</style>
