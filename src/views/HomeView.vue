<script setup>
import { inject, onMounted, ref } from 'vue'
import { ApiService } from '../services/api'
import BottomBar from '@/components/BottomBar.vue'
import Table from '@/components/Table.vue'

const { toggleLoading } = inject('loading')
const list = ref()
const tableActions = ref({
  viewItemDetails: async (item, ref) => {
    toggleLoading()
    ref.value = await apiService.getByName(item)
    toggleLoading()
  },
  toggleFav: (item) => {
    apiService.toggleFav(item)
    updateList()
  },
  search: (text) => {
    list.value = apiService.filterByText(text)
  },
})
const apiService = new ApiService()

const updateList = async () =>
  await apiService.getList().then((x) => {
    list.value = x
  })

onMounted(async () => {
  await updateList()
  toggleLoading(false)
})
</script>

<template>
  <Table :items="list" :actions="tableActions"></Table>
  <BottomBar></BottomBar>
</template>
