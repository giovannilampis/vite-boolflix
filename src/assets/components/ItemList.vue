<script>
import ItemSingle from './ItemSingle.vue'
import store from '../..//../store'
import axios from 'axios'

export default {
    name: 'ItemList',
    components: { ItemSingle
    
    },
    data() {
        return {
            movies: store.movies
        }
    }
}

</script>

<template>

    <section class="container">

        <h2 class="text-uppercase">movies</h2>

        <div class="row">

            <div class="col-12 col-md-4 col-lg-2">

                <ItemSingle v-for="movie,index of movies" :key="index" :movie="movie" />

            </div>


        </div>
        
    </section>

</template>

<style scoped>


</style>