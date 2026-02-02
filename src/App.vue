<script setup>
import { computed, onBeforeMount, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useBreweriesStore } from './stores/breweries'
import Heading from './components/Heading.vue'
import Brewery from './components/Brewery.vue'
import NoResults from './components/NoResults.vue'

const breweriesStore = useBreweriesStore()
const { breweries } = storeToRefs(breweriesStore)

const searchTerm = ref('')
const searchIsActive = ref(false)
const filteredBreweries = ref([])
const currentPage = ref(1)
const itemsPerPage = ref(9)

const filterBreweriesFromSearch = (term) => {
  if (term.trim() !== '') {
    searchTerm.value = term
    searchIsActive.value = true
    filteredBreweries.value = breweries.value.filter(brewery =>
      brewery.name.toLowerCase().includes(term.toLowerCase()))
    currentPage.value = 1
  } else {
    // reset values so data is accurate
    searchTerm.value = ''
    searchIsActive.value = false
    filteredBreweries.value = []
  }
}

const totalCount = computed(() => breweries.value.length);
const totalPages = computed(() => Math.ceil(totalCount.value / itemsPerPage.value))

const breweriesToDispay = computed(() => {
  if (searchIsActive.value) {
    return filteredBreweries.value
  } else {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return breweries.value.slice(start, start + itemsPerPage.value)
  }
})

onBeforeMount(async () => {
  await breweriesStore.fetchBreweries()
})
</script>

<template>
  <div class="app-container varela-round-regular ">
    <Heading :searchTerm="searchTerm" @emitSearch="filterBreweriesFromSearch" />
    <div v-if="breweriesToDispay.length" class="brewery-container">
      <Brewery v-for="brewery in breweriesToDispay" :key="brewery.id" :breweryType="brewery.brewery_type"
        :breweryName="brewery.name" :breweryCity="brewery.city" :breweryState="brewery.state" />
    </div>
    <div v-else class="brewery-no-results">
      <NoResults />
    </div>
    <div v-if="totalPages > 1 && !searchIsActive" class="app-pagination">
      <vue-awesome-paginate :total-items="totalCount" :items-per-page="itemsPerPage" :max-pages-shown="10"
        v-model="currentPage" />
    </div>
  </div>
</template>

<style>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.varela-round-regular {
  font-family: "Varela Round", sans-serif;
  font-weight: 400;
  font-style: normal;
}

/* brewery container */
.brewery-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
}

/* pagination */
.app-pagination {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

.pagination-container {
  display: flex;
  column-gap: 10px;
}

.paginate-buttons {
  background-color: white !important;
  height: 40px !important;
  width: 40px !important;
  border: 2px solid var(--med-beer);
  border-radius: 50% !important;
  padding: 10px;
}

.paginate-buttons:hover {
  cursor: pointer;
  background-color: white !important;
  height: 40px !important;
  width: 40px !important;
  border: 2px solid var(--light-beer);
  border-radius: 50% !important;
  padding: 10px;
}
</style>
