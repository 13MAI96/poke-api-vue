<script setup lang="ts">
import Search from './Search.vue'
import Item from './Item.vue'
import Button from './Button.vue'
import Popup from './Popup.vue'
import { ref } from 'vue'
import type { PokemonItemList } from '@/models/pokemon-item-list.model'
import Snackbar from './Snackbar.vue'

const props = defineProps(['items', 'actions'])

const popup = ref(false)
const popupData = ref()
const snackbar = ref({ status: false, message: '' })

function onFavClick(event: { item: PokemonItemList }) {
  props.actions.toggleFav(event.item)
  const pokemon = event.item
  snackbar.value.message = `${pokemon.fav ? 'Added' : 'Removed'} ${pokemon.name} ${pokemon.fav ? 'to' : 'from'} favorites.`
  snackbar.value.status = true
}
function onItemClick(event: { item: PokemonItemList }) {
  popupData.value = props.actions.viewItemDetails(event.item, popupData)
  popup.value = true
}

const closePopUp = () => {
  popup.value = false
}

const onSearch = (event: any) => {
  props.actions.search(event.input)
}

const onShare = () => {
  snackbar.value = { status: true, message: 'Copied to clipboard.' }
}

const goHome = () => {
  props.actions.goHome()
}
</script>

<template>
  <div class="table">
    <Search @search="onSearch($event)"></Search>
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
        <Button type="basic" @click="goHome()">Go back home</Button>
      </div>
    </div>
  </div>
  <Popup
    v-if="popup"
    :data="popupData"
    @background-click="closePopUp()"
    @fav-click="onFavClick($event)"
    @shared-with-friends="onShare()"
  ></Popup>
  <Snackbar v-if="snackbar.status" @close="snackbar.status = false">{{
    snackbar.message
  }}</Snackbar>
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
    padding: 20px 0;
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
  /* Hide scrollbar for Chrome, Safari and Opera */
  .table-container::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .table-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
}
@media (min-width: 640px) {
  .table {
    width: 570px;
  }
}
</style>
