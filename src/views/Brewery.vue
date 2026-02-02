<script setup>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useBreweriesStore } from '../stores/breweries'
import { computed } from 'vue'

import SelectedBreweryCard from '../components/SelectedBreweryCard.vue'

const currentRoute = useRoute()
const breweriesStore = useBreweriesStore()
const { breweries } = storeToRefs(breweriesStore)
const currentBrewery = computed(() => breweries.value.find(brewery => brewery.id === currentRoute.params.id))
</script>
<template>
  <div v-if="currentBrewery" class="brewery">
    <SelectedBreweryCard :selectedBreweryType="currentBrewery.brewery_type" :selectedBreweryName="currentBrewery.name"
      :selectedBreweryStreet="currentBrewery.street" :selectedBreweryCity="currentBrewery.city" :selectedBreweryState="currentBrewery.state"
      :selectedBreweryPhone="currentBrewery.phone" :selectedBrewerySite="currentBrewery.website_url" />
  </div>
  <div v-else>
    <p>No brewery found. Please go back and search again.</p>
  </div>
</template>

<style scoped></style>
