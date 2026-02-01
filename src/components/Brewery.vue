<script setup>

defineProps({
  breweryType: {
    type: String,
    required: true
  },
  breweryName: {
    type: String,
    required: true
  },
  breweryCity: {
    type: String,
    required: true
  },
  breweryState: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="brewery-card">
    <span>{{ breweryType }}</span>
    <div class="brewery-name">
      <h3>{{ breweryName }}</h3>
    </div>
    <div class="brewery-address">
      {{  breweryCity }}, {{breweryState }}
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

.brewery-card span {
  padding: 4px 12px;
  background-color: var(--med-beer);
  border-radius: 4px;
}
</style>
