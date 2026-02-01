import { defineStore } from 'pinia'

export const useBreweriesStore = defineStore('breweries', {
  state: () => ({
    breweries: [],
  }),
  getters: {
    allBreweries: (state) => state.breweries
  },
  actions: {
    async fetchBreweries() {
      const url = 'https://api.openbrewerydb.org/v1/breweries'
      try {
        const response = await fetch(url)            
        if (!response.ok) {
          throw new Error('Failed to fetch breweries');
        } else {
          const data = await response.json()
          this.breweries = data
        }
      } catch(err) {
        console.log('err fetching breweries', err)
      }
    }
  },
  async fetchBreweriesFromSearch() {
    
  }
})
