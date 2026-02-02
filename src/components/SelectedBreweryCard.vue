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
  <div class="individual-card" tabindex="0">
    <span>{{ selectedBreweryType }}</span>
    <div class="individual-name">
      <h3>{{ selectedBreweryName }}</h3>
    </div>
    <div class="individual-phone">
      <h3>{{ selectedBreweryPhone }}</h3>
    </div>
    <div class="individual-address">
      {{ selectedBreweryStreet }}, {{  selectedBreweryCity }}, {{ selectedBreweryState }}
    </div>
  </div>

</template>

<style scoped>
.brewery-card {
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  border: 2px solid transparent;
}

.brewery-card:hover {
  cursor: pointer;
  border: 3px solid var(--med-beer);
}

.brewery-card:focus-visible {
  outline: var(--med-beer) auto 1px;
}

.brewery-card span {
  padding: 4px 12px;
  background-color: var(--med-beer);
  border-radius: 4px;
}
</style>
