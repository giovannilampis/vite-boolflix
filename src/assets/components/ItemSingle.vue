<script>

//original title
//title
//vote_average
//original_lamguage
//id

export default {
    props: {
        item: Object
    }
}

</script>

<template>

    <div class="my-card text-center">

        <h4>{{ item.original_title }}</h4>
        <div>{{ item.title }}</div>
        <div>{{ item.vote_average }}</div>
        <div>{{ item.original_lamguage }}</div>
        <div>{{ item.id }}</div>

    </div>
    
</template>

<style scoped>


</style>