import type { PokemonItemList } from '@/models/pokemon-item-list.model'
import { reactive } from 'vue'

export const store = reactive<{ pokemon_list: PokemonItemList[]; update: (x: any) => void }>({
  pokemon_list: [],
  update(new_list: PokemonItemList[]) {
    this.pokemon_list = new_list
  },
})
