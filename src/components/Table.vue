<script setup lang="ts">
import Search from './Search.vue'
import Item from './Item.vue'
import Button from './Button.vue'
import Popup from './Popup.vue'
import { ref } from 'vue'
import type { PokemonItemList } from '@/models/pokemon-item-list.model'

const props = defineProps(['items', 'actions'])

const popup = ref(false)
const popupData = ref()
function onFavClick(event: Event) {
  console.log(event)
}
function onItemClick(event: { item: PokemonItemList }) {
  popupData.value = props.actions.viewItemDetails(event.item, popupData)
  popup.value = true
}

function closePopUp() {
  popup.value = false
}
</script>

<template>
  <div class="table">
    <Search></Search>
    <div class="table-container">
      <div class="table-list" v-if="props.items?.length > 0">
        <Item
          v-for="item in props.items"
          class="table-item"
          :item="item"
          @on-fav-click="onFavClick($event)"
          @on-item-click="onItemClick($event)"
        ></Item>
      </div>
      <div v-else class="table-empty">
        <h3>Uh-oh!</h3>
        <p class="welcome-text">You look lost on your journey!</p>
        <Button type="basic" @click="">Go back home</Button>
      </div>
    </div>
  </div>
  <Popup v-if="popup" :data="popupData" @background-click="closePopUp()"></Popup>
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
