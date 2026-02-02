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
