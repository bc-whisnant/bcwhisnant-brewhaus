<script setup>
import { useRouter } from 'vue-router'

defineProps({
  searchIncluded: {
    type: Boolean,
    required: true
  }
})
const searchTerm = defineModel()
const router = useRouter()
const emits = defineEmits(['emitSearch'])
const emitOnSearch = (term) => {
  emits('emitSearch', term)
} 

const goHome = () => router.push('/')
</script>

<template>
  <header>
    <div class="heading" @click="goHome">
      <span class="heading-icon">
        🍻
      </span>
      <h1>BrewHaus</h1>
    </div>
    <div v-if="searchIncluded" class="heading-search">
      <input v-model="searchTerm" @input="emitOnSearch(searchTerm)" type="text" class="search-input" placeholder="Enter a name to search..." />
    </div>
  </header>
</template>

<style scoped>
header {
  margin-bottom: 15px;
}
.heading {
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
}

.heading-icon {
  font-size: 4rem;
}

.heading-search {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.search-input {
  flex: 1;
  padding: 15px 20px;
  border: 3px solid var(--med-beer);
  border-radius: 10px;
  font-size: 1rem;
  background: white;
}

.search-input:focus-visible {
  outline: var(--light-beer) auto 1px;
  
}
</style>
