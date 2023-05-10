<script >

import HeaderComp from './assets/components/HeaderComp.vue';
import ItemList from './assets/components/ItemList.vue';
import SeriesList from './assets/components/SeriesList.vue';

export default {
    name: 'app',
    components: {
        HeaderComp,
        ItemList,
        SeriesList
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

            <SeriesList/>

        </main>

    </body>

</template>

<style lang="scss">
@use './style/main.scss';

body {
    background-color: #141414;
    color: #ffffff;
}

main {
    position: relative;
    margin-top: 8rem;
}

</style>
