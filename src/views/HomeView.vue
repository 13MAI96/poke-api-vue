<script setup>
import { inject, onMounted, ref } from 'vue'
import { ApiService } from '../services/api'
import BottomBar from '@/components/BottomBar.vue'
import Table from '@/components/Table.vue'

const { toggleLoading } = inject('loading')
const list = ref()
const tableActions = ref({
  viewItemDetails: async (item, ref) => {
    ref.value = await apiService.getByName(item)
  },
  markAsFav: () => {},
})
const apiService = new ApiService()

onMounted(async () => {
  apiService.getList().then((x) => {
    list.value = x
  })
  toggleLoading(false)
})
</script>

<template>
  <Table :items="list" :actions="tableActions"></Table>
  <BottomBar></BottomBar>
</template>
