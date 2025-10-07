<script setup lang="ts">
import Search from './Search.vue'
import Item from './Item.vue'
import Button from './Button.vue'

const props = defineProps(['items'])

function capitalize(txt: string) {
  if (!txt) return ''
  return txt.charAt(0).toUpperCase() + txt.slice(1)
}
</script>

<template>
  <div class="table">
    <Search></Search>
    <div class="table-container">
      <div class="table-list" v-if="props.items?.length > 0">
        <Item v-for="item in props.items">{{ capitalize(item.name) }}</Item>
      </div>
      <div v-else class="table-empty">
        <h3>Uh-oh!</h3>
        <p class="welcome-text">You look lost on your journey!</p>
        <Button type="basic" @click="">Go back home</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 5px 0 5px;
  height: calc(100% - 80px);
  width: calc(100vw - 2rem);
  box-sizing: border-box;
  .table-container {
    width: 100%;
    padding: 20px 0.2rem;
    max-height: calc(100vh - 170px);
    overflow-y: scroll;
    .table-empty {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4rem 2rem;
    }
    .table-list {
      max-height: 100%;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
@media (min-width: 640px) {
  .table {
    width: 570px;
  }
}
</style>
