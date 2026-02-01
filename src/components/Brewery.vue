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
    <div class="brewery-type">
      <h4>{{ breweryType }}</h4>
    </div>
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
</style>
