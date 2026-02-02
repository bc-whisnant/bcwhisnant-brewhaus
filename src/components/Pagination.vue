<script setup>
    const currentPage = defineModel()

    const emits = defineEmits(['emitPaginationClick'])

    const paginationClick = (page) => {
        console.log('page here', page)
        emits('emitPaginationClick', page)
    } 
    defineProps({
    totalCount: {
        type: String,
        required: true
    },
    itemsPerPage: {
        type: String,
        required: true
    },
    maxPagesShown: {
        type: String,
        required: true
    }
    })

</script>


<template>
<div class="pagination-container">
    <vue-awesome-paginate :total-items="totalCount" :items-per-page="itemsPerPage" :max-pages-shown="maxPagesShown"
        v-model="currentPage" @click="paginationClick" />
</div>
 


</template>


<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}

.paginate-buttons {
  background-color: white !important;
  height: 40px !important;
  width: 40px !important;
  border: 2px solid var(--med-beer);
  border-radius: 50% !important;
  padding: 10px;
}

.paginate-buttons:hover {
  cursor: pointer;
  background-color: white !important;
  height: 40px !important;
  width: 40px !important;
  border: 2px solid var(--light-beer);
  border-radius: 50% !important;
  padding: 10px;
}

.paginate-buttons:focus-visible {
  outline: var(--light-beer) auto 1px;
}


</style>