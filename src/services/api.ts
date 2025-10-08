import { PokemonItemList } from '@/models/pokemon-item-list.model'
import { Pokemon } from '@/models/pokemon.model'
import { computed, ref } from 'vue'

export class ApiService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon'

  private _pokemon_list: PokemonItemList[] = JSON.parse(
    localStorage.getItem('pokemon_list') ?? '[]',
  )

  async getList() {
    try {
      const list = JSON.parse(localStorage.getItem('pokemon_list') ?? '[]')
      if (list.length > 0) {
        this._pokemon_list = list
        return list
      } else {
        const res = await fetch(this.apiUrl)
        const data = await res.json()
        this._pokemon_list = data.results.map((poke: any) => {
          return new PokemonItemList(poke.name, poke.url)
        }) as PokemonItemList[]
        localStorage.setItem('pokemon_list', JSON.stringify(this._pokemon_list))
        return this._pokemon_list
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
    console.log(item)
    this._pokemon_list = this._pokemon_list.map((x) => {
      if (x.name == item.name) x.fav = !x.fav
      return x
    })
    localStorage.setItem('pokemon_list', JSON.stringify(this._pokemon_list))
  }

  filterByText(text: string) {
    return this._pokemon_list.filter((x) => x.name.toLowerCase().indexOf(text.toLowerCase()) > -1)
  }
}
