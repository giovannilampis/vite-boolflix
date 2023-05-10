<script>
import SeriesSingle from './SeriesSingle.vue'
import {store} from '../../../store'

export default {
    name: 'SeriesList',
    components: { SeriesSingle
    
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <h2 class="text-center text-uppercase">series</h2>

    <section class="container">

        <div class="row justify-content-center">
          
            <SeriesSingle v-for="(serie,index) in store.series" :key="index" :serie="serie" />

        </div>
        
    </section>

</template>

<style scoped>

section {
    position: relative;
    margin-top: 8rem;
}

</style>