import { PokemonItemList } from '@/models/pokemon-item-list.model'
import { Pokemon } from '@/models/pokemon.model'
import { store } from './store'

export class ApiService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon'
  private public_store = store

  async getList(group: string) {
    try {
      const list: PokemonItemList[] = JSON.parse(localStorage.getItem('pokemon_list') ?? '[]')
      if (list.length > 0) {
        this.public_store.update(list)
        return group == 'All' ? list : list.filter((x) => x.fav)
      } else {
        const res = await fetch(this.apiUrl)
        const data = await res.json()
        this.public_store.update(
          data.results.map((poke: any) => {
            return new PokemonItemList(poke.name, poke.url)
          }) as PokemonItemList[],
        )
        localStorage.setItem('pokemon_list', JSON.stringify(this.public_store.pokemon_list))
        return this.public_store.pokemon_list
      }
    } catch (err) {
      console.error(err)
    }
  }

  async getByName(item: PokemonItemList) {
    try {
      const res = await fetch(`${this.apiUrl}/${item.name}`)
      const data = await res.json()
      const { name, weight, height } = data
      return new Pokemon({
        name: name,
        weight,
        height,
        fav: item.fav,
        picture: data.sprites.front_default,
        types: data.types.map((type: any) => {
          return type.type.name
        }),
      })
    } catch (err) {
      console.error(err)
    }
  }

  toggleFav(item: PokemonItemList) {
    this.public_store.update(
      this.public_store.pokemon_list.map((x) => {
        if (x.name == item.name) x.fav = !x.fav
        return x
      }),
    )
    localStorage.setItem('pokemon_list', JSON.stringify(this.public_store.pokemon_list))
  }

  filterByText(text: string) {
    return this.public_store.pokemon_list.filter(
      (x) => x.name.toLowerCase().indexOf(text.toLowerCase()) > -1,
    )
  }
}
