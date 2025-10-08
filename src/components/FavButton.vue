<script setup lang="ts">
import IconStar from './icons/IconStar.vue'

const props = defineProps({ isChecked: Boolean })
</script>

<template>
  <button class="fav-button">
    <IconStar class="basic" :class="{ active: props.isChecked }"></IconStar>
  </button>
</template>

<style scoped>
.fav-button {
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: #f5f5f5;
}
.fav-button:hover {
  border: #bfbfbf80 1px solid;
  cursor: pointer;
}
</style>
