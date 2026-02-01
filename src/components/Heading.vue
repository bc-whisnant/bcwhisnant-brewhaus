<script setup></script>

<template>
  <header>
    <div class="heading">
      <span class="heading-icon">
        🍻
      </span>
      <h1>BrewHaus</h1>
    </div>
    <form class="heading-search">
      <input type="text" class="search-input" placeholder="Enter a name" />
      <button type="submit" class="search-button">
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
</style>
