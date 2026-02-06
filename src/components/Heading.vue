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
    <form @submit.prevent="emitOnSearch(searchTerm)" v-if="searchIncluded" class="heading-search">
      <input v-model="searchTerm" type="text" class="search-input" placeholder="Enter a name to search..." />
      <button type="submit" class="search-button" :disabled="!searchTerm">
        <span>Search</span>
      </button>
    </form>
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

.search-button {
  padding: 15px 35px;
  background: var(--med-beer);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

button:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
  opacity: 0.6;
  border: 1px solid #aaa;
}
</style>
