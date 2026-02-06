import { defineStore } from "pinia"

export const useBreweriesStore = defineStore("breweries", {
  state: () => ({
    breweries: [],
    breweriesLoading: false,
    errorFetchingBreweries: false,
    currentPage: 1,
  }),
  getters: {
    allBreweries: (state) => state.breweries,
    fetchHasError: (state) => state.errorFetchingBreweries,
  },
  actions: {
    async fetchBreweries() {
      this.breweriesLoading = true
      const url = "https://api.openbrewerydb.org/v1/breweries"
      try {
        const response = await fetch(url)
        if (!response.ok) {
          this.errorFetchingBreweries = true
          throw new Error("Failed to fetch breweries")
        } else {
          const data = await response.json()
          this.breweries = data
          this.breweriesLoading = false
        }
      } catch (err) {
        this.errorFetchingBreweries = true
        console.log("err fetching breweries", err)
      }
    },
    async fetchBreweriesBasedOnSearch(name) {
      this.breweriesLoading = true
      const url = `https://api.openbrewerydb.org/v1/breweries?by_name=${name}`
      try {
        const response = await fetch(url)
        if (!response.ok) {
          this.errorFetchingBreweries = true
          throw new Error("Failed to fetch breweries")
        } else {
          this.breweriesLoading = false
          return await response.json()
        }
      } catch (err) {
        this.errorFetchingBreweries = true
        console.log("err fetching breweries", err)
      }
    },
    updatePagination(val) {
      this.currentPage = val
    }
  }
})
