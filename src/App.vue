<script >



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
    }
}

</script>

<template>

    <body>
        
        <HeaderComp/>

        <main>

            <ItemList/>

        </main>

    </body>

</template>

<style lang="scss">
@use './style/main.scss';

body {
    background-color: #141414;
    color: #ffffff;
}

</style>
