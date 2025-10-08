<script setup lang="ts">
import Button from './Button.vue'
import FavButton from './FavButton.vue'
import IconClose from './icons/IconClose.vue'

const emit = defineEmits(['backgroundClick', 'favClick', 'sharedWithFriends'])

const capitalize = (txt: string) => {
  if (!txt) return ''
  return txt.charAt(0).toUpperCase() + txt.slice(1)
}

const onBackgroundClick = (event: Event) => {
  emit('backgroundClick')
}
const onCardClick = (event: Event) => {
  event.stopPropagation()
}
const shareWithFriends = async () => {
  try {
    console.log(props.data)
    await navigator.clipboard.writeText(JSON.stringify(props.data))
    emit('sharedWithFriends')
  } catch (err) {
    console.error('Error al copiar:', err)
  }
}

const onFavClick = () => {
  emit('favClick', { item: props.data })
  props.data.fav = !props.data.fav
}

const props = defineProps(['data'])
</script>

<template>
  <div class="popup" @click="onBackgroundClick($event)">
    <div class="popup-container" @click="onCardClick($event)">
      <div class="popup-picture">
        <img class="popup-img" :src="data.picture" />
        <div class="popup-close" @click="onBackgroundClick($event)">
          <IconClose></IconClose>
        </div>
      </div>
      <div class="popup-info">
        <div class="popup-info-item">
          <p class="popup-info-item-title">
            Name: <span class="popup-info-item-text">{{ capitalize(data.name) }}</span>
          </p>
        </div>
        <div class="popup-info-item">
          <p class="popup-info-item-title">
            Weight: <span class="popup-info-item-text">{{ data.weight }}</span>
          </p>
        </div>
        <div class="popup-info-item">
          <p class="popup-info-item-title">
            Height: <span class="popup-info-item-text">{{ data.height }}</span>
          </p>
        </div>
        <div class="popup-info-item">
          <p class="popup-info-item-title">
            Types:
            <span class="popup-info-item-text" v-for="(value, index) in data.types">{{
              `${capitalize(value)}${index + 1 < data.types.length ? ', ' : ''}`
            }}</span>
          </p>
        </div>
      </div>
      <div class="popup-actions">
        <Button @click="shareWithFriends()">Share to my friends</Button>
        <FavButton :isChecked="props.data.fav" @click="onFavClick()"></FavButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000099;
  width: 100vw;
  height: 100svh;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  .popup-container {
    border-radius: 5px;
    width: 315px;
    height: 506px;
    background-color: #ffffff;
    box-sizing: border-box;
    .popup-picture {
      position: relative;
      height: 220px;
      background-image: url('../assets/background.svg');
      box-sizing: border-box;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      .popup-img {
        height: 220px;
      }
      .popup-close {
        position: absolute;
        top: 15px;
        right: 15px;
      }
      .popup-close:hover {
        cursor: pointer;
      }
    }
    .popup-info {
      height: 202px;
      padding: 10px 30px 0 30px;
      .popup-info-item {
        height: 47px;
        border-bottom: 1px solid #e8e8e8;
        display: flex;
        align-items: center;
        .popup-info-item-title {
          font-family: Lato;
          font-weight: 700;
          font-size: 18px;
          line-height: 150%;
          .popup-info-item-text {
            font-family: Lato;
            font-weight: 500;
            font-size: 18px;
            line-height: 150%;
          }
        }
      }
    }
    .popup-actions {
      height: 84px;
      padding: 20px 30px;
      display: flex;
      justify-content: space-between;
    }
  }
}
@media (min-width: 640px) {
  .popup {
    .popup-container {
      width: 570px;
    }
  }
}
</style>
