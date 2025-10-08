<script setup lang="ts">
import { ref } from 'vue'
import IconSearch from './icons/IconSearch.vue'

const emit = defineEmits(['search'])
const search_text = ref()

const searchEvent = () => {
  emit('search', { input: search_text.value })
}
</script>

<template>
  <div class="search">
    <div class="search-container">
      <div class="search-icon">
        <IconSearch></IconSearch>
      </div>
      <input
        class="search-input"
        type="text"
        v-model="search_text"
        @keyup="searchEvent()"
        placeholder="Search"
      />
    </div>
  </div>
</template>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  .search-container {
    border-radius: 5px;
    width: 100%;
    box-shadow: 0 2px 10px var(--color-border);
    height: 100%;
    display: flex;
    .search-icon {
      width: 20px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: end;
      margin: 0 0.5rem;
    }
    .search-input {
      background-color: var(--background-color);
      color: var(--color-text);
      height: 100%;
      font-family: Montserrat;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      border: none;
      width: 100%;
    }
    .search-input:focus-visible,
    .search-input:focus,
    .search-input:target {
      border: none;
      outline: none;
    }
    .search-input::placeholder {
      color: #bfbfbf;
    }
  }
}
</style>
