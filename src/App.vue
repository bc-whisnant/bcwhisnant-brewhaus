<template>
  <div id="app" class="app-container varela-round-regular ">
    <router-view />
  </div>
</template>



<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
}

.varela-round-regular {
  font-family: "Varela Round", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>