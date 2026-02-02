<script setup>
defineProps({
    appIsLoading: {
        type: Boolean,
        required: true
    }
})

</script>
<template>
    <div class="no-data">
        <p v-if="appIsLoading">Loading breweries...</p>
        <p v-else>No results found. Please adjust your search.</p>
    </div>
</template>

<style scoped>
.no-data {
    display: flex;
    width: 100%;
    justify-content: center;
}
</style>