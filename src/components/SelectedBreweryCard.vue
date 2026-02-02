<script setup>

import Heading from './Heading.vue';

defineProps({
  selectedBreweryType: {
    type: String,
    required: true
  },
  selectedBreweryName: {
    type: String,
    required: true
  },
  selectedBreweryStreet: {
    type: String,
    required: true
  },
  selectedBreweryCity: {
    type: String,
    required: true
  },
  selectedBreweryState: {
    type: String,
    required: true
  },
  selectedBreweryPhone: {
    type: String,
    required: true
  },
  selectedBrewerySite: {
    type: String,
    required: false
  }
})

</script>

<template>
  <Heading :searchIncluded="false" />
  <div class="individual-brewery-card" tabindex="0">
    <span>{{ selectedBreweryType }}</span>
    <div class="brewery-name">
      <h2>{{ selectedBreweryName }}</h2>
    </div>
    <div class="brewery-phone">
      <h3>Phone: <a :href="'tel:' + `${selectedBreweryPhone}`">{{ selectedBreweryPhone }}</a></h3>
    </div>
    <div class="brewery-address">
      <h4>Address: {{ selectedBreweryStreet }}, {{ selectedBreweryCity }}, {{ selectedBreweryState }}</h4>
    </div>
    <div class="brewery-site">
      Website: <a :href="selectedBrewerySite" target="_blank">{{ selectedBrewerySite }}</a>
    </div>
  </div>

</template>

<style scoped>
.individual-brewery-card:focus-visible,
.brewery-phone a:focus-visible,
.brewery-site a:focus-visible {
  outline: var(--med-beer) auto 1px;
  border-radius: 2px;
}

.brewery-phone a,
.brewery-site a {
  cursor: pointer;
  color: var(--med-beer);
}
</style>
