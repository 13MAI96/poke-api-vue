<script setup lang="ts">
import Button from './Button.vue'

const props = defineProps<{ group: 'All' | 'Fav' }>()
const emit = defineEmits(['filter'])

const onFilterClick = (filter: string) => {
  emit('filter', { filter: filter })
}
</script>

<template>
  <div class="bottom-bar">
    <div class="bar-actions">
      <Button
        type="menu"
        :isDisabled="props.group != 'All'"
        class="lg"
        @click="onFilterClick('All')"
        >All</Button
      >
      <Button type="fav" :isDisabled="props.group != 'Fav'" class="lg" @click="onFilterClick('Fav')"
        >Favorites</Button
      >
    </div>
  </div>
</template>

<style scoped>
.bottom-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  box-shadow: 0 -5px 4px var(--color-border);
  position: fixed;
  bottom: 0;
  left: 0;
  .bar-actions {
    width: 100%;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
  }
}

@media (min-width: 640px) {
  .bottom-bar {
    .bar-actions {
      width: 570px;
      padding: 0;
    }
  }
}
</style>
