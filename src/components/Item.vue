<script setup lang="ts">
import FavButton from './FavButton.vue'

const props = defineProps(['item'])
const emit = defineEmits(['onFavClick', 'onItemClick'])

function onFavClick(event: Event) {
  event.stopPropagation()
  emit('onFavClick', { event: event, item: props.item })
}

function onItemClick(event: Event) {
  emit('onItemClick', { item: props.item })
}

function capitalize(txt: string) {
  if (!txt) return ''
  return txt.charAt(0).toUpperCase() + txt.slice(1)
}
</script>

<template>
  <div class="item" @click="onItemClick($event)">
    <p class="item-text">
      {{ capitalize(props.item.name) }}
    </p>
    <div class="item-fav-icon" @click="onFavClick($event)">
      <FavButton :isChecked="props.item.fav"></FavButton>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 50px;
  background-color: white;
  .item-fav-icon {
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 0 0.5rem;
  }
  .item-text {
    width: calc(100% - 50px);
    padding-left: 20px;
    font-family: Lato;
    font-weight: 500;
    font-size: 22px;
    line-height: 100%;
    vertical-align: middle;
  }
}
.item:hover {
  cursor: pointer;
}
@media (min-width: 640px) {
  .search {
    .search-container {
      width: 50%;
    }
  }
}
</style>
