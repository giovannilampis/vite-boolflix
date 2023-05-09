<script >

// import axios from 'axios';
// import {store} from './store'
import HeaderComp from './assets/components/HeaderComp.vue';
import ItemList from './assets/components/ItemList.vue';


export default {
    name: 'app',
    components: {
        HeaderComp,
        ItemList
    },
    data() {
        return {
            
        }
    },
    methods: {

    },
    created() {

    }
}

</script>

<template>

  <HeaderComp/>

  <main>

    <ItemList/>

  </main>

</template>

<style lang="scss">
@use './style/main.scss';
</style>
