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

        <div class="row justify-content-center">
          
            <ItemSingle v-for="movie,index of store.movies" :key="index" :movie="movie" />

        </div>
        
    </section>

</template>

<style scoped>

section {
    position: relative;
    margin-top: 8rem;
}


</style>