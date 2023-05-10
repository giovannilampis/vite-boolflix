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

    <section class="container">

        <div class="row">
          
            <ItemSingle class="col-12 col-md-4 col-lg-2" v-for="movie,index of store.movies" :key="index" :movie="movie" />

        </div>
        
    </section>

</template>

<style scoped>

section {
    margin-top: 8rem;
}


</style>