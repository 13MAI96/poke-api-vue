export class Pokemon {
  name!: string
  weight!: number
  height!: number
  types!: string[]
  fav!: boolean
  picture!: string

  constructor(data: any) {
    Object.assign(this, data)
  }
}
