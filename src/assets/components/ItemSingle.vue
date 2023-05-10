<script>
import {store} from '../../../store'

export default {
    data() {
        return {
            store,
            availableFlags: ['it', 'en', 'de', 'es', 'fr']
        }
    },
    props: {
        movie: Object
    }
    
}

</script>

<template>

    <div class="my-card text-center">
        <img class="w-100" :src="store.imageBaseUrl + movie.poster_path" alt="" style="">
        <div>{{ movie.title }}</div>
        <h4>{{ movie.original_title }}</h4>
        <div v-if="availableFlags.includes(movie.original_language)">
            <img class="flag" :src="'../../../public/images/' + movie.original_language + '.png'" :alt="movie.original_language + 'flag'">
        </div>
        <div v-else>{{ movie.original_language }}</div>
        <div>{{ movie.vote_average }}</div>
        

    </div>
    
</template>

<style scoped>

.flag {
    width: 2rem;
    aspect-ratio: 1 / 1;
}

</style>