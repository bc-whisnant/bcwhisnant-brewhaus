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
      <input type="text" class="search-input" placeholder="Enter a city name to find a brewery near you">
      <button type="submit" class="search-button">
        <span>Search</span>
      </button>
    </form>
  </header>
</template>

<style scoped>
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
  gap: 10px;
  margin-top: 20px;
}

.search-input {
  flex: 1;
  padding: 15px 20px;
  border: 3px solid #fbbf24;
  border-radius: 10px;
  font-size: 1rem;
  background: white;
}

.search-button {
  padding: 15px 35px;
  background: #f59e0b;
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
