<script setup>
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useBreweriesStore } from './stores/breweries';
import Heading from './components/Heading.vue'
import Brewery from './components/Brewery.vue';

const breweriesStore = useBreweriesStore()
const { breweries } = storeToRefs(breweriesStore)

const searchTerm = ref('')
const searchIsActive = ref(false)
const filteredBreweries = ref([])

const filterBreweriesFromSearch = (term) => {
  if (term !== '') {
      searchIsActive.value = true
      filteredBreweries.value = breweries.value.filter(brewery => 
    brewery.name.toLowerCase().includes(term.toLowerCase()))
  } else {
    searchTerm.value = term
  }
}

const breweriesToDispay = computed(() => {
  if (searchIsActive.value) {
    return filteredBreweries.value
  } else {
    return breweries.value
  }
})

onBeforeMount(async () => {
  await breweriesStore.fetchBreweries()
})
</script>

<template>
  <div class="app-container varela-round-regular ">
    <Heading :searchTerm="searchTerm" @emitSearch="filterBreweriesFromSearch" />
    <div class="brewery-container">
      <Brewery v-for="brewery in breweriesToDispay" :key="brewery.id" :breweryType="brewery.brewery_type"
        :breweryName="brewery.name" :breweryCity="brewery.city" :breweryState="brewery.state" />
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
</style>
