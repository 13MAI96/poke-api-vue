<script setup lang="ts">
import FavButton from './FavButton.vue'
</script>

<template>
  <div class="item">
    <p class="item-text">
      <slot></slot>
    </p>
    <div class="item-fav-icon">
      <FavButton></FavButton>
    </div>
  </div>
</template>

<style scoped>
.item {
  :hover {
    cursor: pointer;
  }
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 50px;
  background-color: white;
  .item-fav-icon {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 0 0.5rem;
  }
  .item-text {
    padding-left: 20px;
    font-family: Lato;
    font-weight: 500;
    font-size: 22px;
    line-height: 100%;
    vertical-align: middle;
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
