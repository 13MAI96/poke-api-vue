const apiUrl: string = 'https://pokeapi.co/api/v2/pokemon'

export const pokeApi = {
  getList: async () => {
    try {
      const res = await fetch(apiUrl)
      const data = await res.json()
      return data
    } catch (err) {
      console.error(err)
    }
  },
  getByName: (name: string) => {},
}
