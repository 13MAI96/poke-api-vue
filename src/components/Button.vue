<script setup lang="ts">
    import IconStar from './icons/IconStar.vue';
    import IconMenu from './icons/IconMenu.vue';

    const props = defineProps({type: 'basic' | 'fav' | 'menu', isDisabled: Boolean})
    
</script>

<template>
  <button class="button" :class="{disabled: props.isDisabled, icon: props.type !== 'basic' ?? '' }">
    <IconStar v-if="props?.type == 'fav'"></IconStar>
    <IconMenu v-if="props?.type == 'menu'"></IconMenu>
    <slot class="button-text"></slot>
  </button>
</template>

<style scoped>
.button {
  border-radius: 16px;
  width: 131px;
  height: 44px;
  padding: 11px 20px;
  background-color: #F22539;
  border: none;
  margin: 1px;
  .button-text{
      width: 100%;
      color: white;
      font-size: 18px;
      font-weight: 700;
      font-family: 'Lato';
  }
}
.button:active{
  background-color: #C00E20
}
.button.disabled{
  background-color: #BFBFBF
}
.button.icon{
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .button-text{
        padding: 0 5px;
        height: 26px;
        display: flex;
        align-items: end;
    }
}

@media (min-width: 1024px) {
  
}
</style>
