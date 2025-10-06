<script setup lang="ts">
import IconSearch from './icons/IconSearch.vue'
</script>

<template>
  <div class="search">
    <div class="search-container">
      <div class="search-icon">
        <IconSearch></IconSearch>
      </div>
      <input class="search-input" type="text" />
    </div>
  </div>
</template>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 2rem);
  box-sizing: border-box;
  height: 50px;
  .search-container {
    width: 100%;
    box-shadow: 0 2px 10px var(--color-border);
    height: 100%;
    display: flex;
    .search-icon {
      width: 20%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: end;
      margin-right: 0.5rem;
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
  }
}
@media (min-width: 640px) {
  .search {
    .search-container {
      width: 50%;
    }
  }
}
</style>
