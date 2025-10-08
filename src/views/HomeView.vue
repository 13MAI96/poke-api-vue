<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import { ApiService } from '../services/api'
import BottomBar from '@/components/BottomBar.vue'
import Table from '@/components/Table.vue'
import { useRouter } from 'vue-router'
import type { PokemonItemList } from '@/models/pokemon-item-list.model'
import { TableActions } from '@/models/table-actions.model'

const { toggleLoading } = inject<any>('loading')
const list = ref()
const router = useRouter()
const group_filter = ref<'All' | 'Fav'>('All')

const tableActions = ref<TableActions>({
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
  await apiService.getList(group_filter.value).then((x) => {
    list.value = x
  })

const onFilterByGroup = (e: { filter: 'All' | 'Fav' }) => {
  group_filter.value = e.filter
  updateList()
}

onMounted(async () => {
  await updateList()
  toggleLoading(false)
})
</script>

<template>
  <Table :items="list" :actions="tableActions"></Table>
  <BottomBar :group="group_filter" @filter="onFilterByGroup($event)"></BottomBar>
</template>
