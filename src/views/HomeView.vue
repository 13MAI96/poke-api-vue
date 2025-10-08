<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import { ApiService } from '../services/api'
import BottomBar from '@/components/BottomBar.vue'
import Table from '@/components/Table.vue'
import { useRouter } from 'vue-router'
import type { PokemonItemList } from '@/models/pokemon-item-list.model'

const { toggleLoading } = inject<any>('loading')
const list = ref()
const router = useRouter()
const groupFilter = ref<'All' | 'Fav'>('All')

const tableActions = ref({
  viewItemDetails: async (item: PokemonItemList, ref: any) => {
    toggleLoading()
    ref.value = await apiService.getByName(item)
    toggleLoading()
  },
  toggleFav: (item: PokemonItemList) => {
    apiService.toggleFav(item)
    updateList()
  },
  search: (text: string) => {
    list.value = apiService.filterByText(text)
  },
  goHome: () => {
    router.push('/')
  },
})
const apiService = new ApiService()

const updateList = async () =>
  await apiService.getList(groupFilter.value).then((x) => {
    list.value = x
  })

const onFilterByGroup = (e: { filter: 'All' | 'Fav' }) => {
  groupFilter.value = e.filter
  updateList()
}

onMounted(async () => {
  await updateList()
  toggleLoading(false)
})
</script>

<template>
  <Table :items="list" :actions="tableActions"></Table>
  <BottomBar :group="groupFilter" @filter="onFilterByGroup($event)"></BottomBar>
</template>
