<script>
import ItemSingleVue from './ItemSingle.vue'

export default {
    name: 'ItemList',
    components: {
        ItemSingle
    }
}

</script>

<template>

    <section class="container">

        <h2 class="text-uppercase">movies</h2>

        <div class="row">

            <div class="col-12 col-md-4 col-lg-2">

                <ItemSingle/>

            </div>


        </div>
        
    </section>

</template>

<style scoped>


</style>