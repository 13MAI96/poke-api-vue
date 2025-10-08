<script setup lang="ts">
import IconStar from './icons/IconStar.vue'
import IconMenu from './icons/IconMenu.vue'

const props = defineProps({ type: String, isDisabled: Boolean })
</script>

<template>
  <button class="button" :class="{ disabled: props.isDisabled, icon: props.type !== 'basic' }">
    <IconStar v-if="props?.type == 'fav'"></IconStar>
    <IconMenu v-if="props?.type == 'menu'"></IconMenu>
    <p class="button-text">
      <slot></slot>
    </p>
  </button>
</template>

<style scoped>
.button {
  border-radius: 60px;
  min-width: 150px;
  height: 44px;
  padding: 11px 20px;
  background-color: #f22539;
  border: none;
  margin: 1px;
  .button-text {
    color: white;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Lato';
  }
}
.button:active {
  background-color: #c00e20;
}
.button.disabled {
  background-color: #bfbfbf;
}
.button.icon {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .button-text {
    padding: 0 5px;
    height: 26px;
    display: flex;
    align-items: end;
  }
}
.button:hover {
  cursor: pointer;
}

@media (min-width: 640px) {
  .button.lg {
    width: 275px;
  }
}
</style>
