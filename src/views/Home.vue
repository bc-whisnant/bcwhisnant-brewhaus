<script setup>
import { computed, onBeforeMount, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useBreweriesStore } from '../stores/breweries'
import Heading from '../components/Heading.vue'
import Brewery from '../components/Brewery.vue'
import NoData from '../components/NoData.vue'
import Pagination from '../components/Pagination.vue'

const breweriesStore = useBreweriesStore()
const { breweries, breweriesLoading } = storeToRefs(breweriesStore)


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
  <div>
    <Heading :searchIncluded="true" :searchTerm="searchTerm" @emitSearch="filterBreweriesFromSearch" />
    <div v-if="!breweriesLoading && breweriesToDispay.length" class="brewery-container">
      <router-link v-for="brewery in breweriesToDispay" :key="brewery.id"
        :to="{ name: 'brewery', params: { id: brewery.id } }" class="individual-brewery">
        <Brewery :breweryType="brewery.brewery_type" :breweryName="brewery.name" :breweryCity="brewery.city"
          :breweryState="brewery.state" />
      </router-link>
    </div>
    <div v-else-if="breweriesLoading || !breweriesToDispay.length" class="brewery-no-results">
      <NoData :appIsLoading="breweriesLoading" />
    </div>
    <div v-if="!breweriesLoading && totalPages > 1 && !searchIsActive" class="app-pagination">
      <Pagination :totalCount="totalCount" :itemsPerPage="itemsPerPage" :maxPagesShown="10" v-model="currentPage" />
    </div>
  </div>
</template>

<style scoped>
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

.individual-brewery,
.individual-brewery:visited {
  text-decoration: none;
  color: black;
}

.individual-brewery:focus-visible {
  outline: var(--med-beer) auto 1px;
  border-radius: 15px;
}

/* pagination container */
.app-pagination {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
</style>
