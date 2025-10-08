export class PokemonItemList {
  name: string
  url: string
  fav: boolean = false

  constructor(name: string, url: string) {
    this.name = name
    this.url = url
  }
}
