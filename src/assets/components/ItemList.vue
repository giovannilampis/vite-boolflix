<script>
import ItemSingle from './ItemSingle.vue'
import {store} from '../../../store'

export default {
    name: 'ItemList',
    components: { ItemSingle
    
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <h2 class="text-center text-uppercase">movies</h2>

    <section class="container">

        <div class="row justify-content-center">
          
            <ItemSingle v-for="(movie,index) in store.movies" :key="index" :movie="movie" />

        </div>
        
    </section>

</template>

<style scoped>
div.row {
    padding-top: 1rem;
}

</style>