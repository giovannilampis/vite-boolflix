<script>

//original title
//title
//vote_average
//original_lamguage
//id

export default {
    props: {
        movie: Object
    }
}

</script>

<template>

    <div class="my-card text-center">

        <h4>{{ movie.original_title }}</h4>
        <div>{{ movie.title }}</div>
        <div>{{ movie.vote_average }}</div>
        <div>{{ movie.original_lamguage }}</div>
        <div>{{ movie.id }}</div>

    </div>
    
</template>

<style scoped>


</style>