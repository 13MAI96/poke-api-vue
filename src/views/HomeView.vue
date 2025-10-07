<script setup>
import { inject, onMounted, ref } from 'vue'
import { pokeApi } from '../services/api'
import BottomBar from '@/components/BottomBar.vue'
import Table from '@/components/Table.vue'

const { toggleLoading } = inject('loading')
const list = ref()

onMounted(async () => {
  list.value = await pokeApi.getList()
  toggleLoading(false)
})
</script>

<template>
  <Table :items="list"></Table>
  <BottomBar></BottomBar>
</template>
