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

    <div class="my-card mx-3 col-12 col-md-4 col-lg-2 text-center">
        <img class="mb-3" :src="store.imageBaseUrl + movie.poster_path" alt="{{ movie.title }}">
        <div class="mb-2">{{ movie.title }}</div>
        <h4>{{ movie.original_title }}</h4>
        <div v-if="availableFlags.includes(movie.original_language)">
            <img class="flag mb-2" :src="'../../../public/images/' + movie.original_language + '.png'" :alt="movie.original_language + ' flag'">
        </div>
        <div v-else class="mb-2">{{ movie.original_language }}</div>
        <small>{{ movie.vote_average }}</small>
        
    </div>
    
</template>

<style scoped>

.my-card {
    margin-bottom: 1rem;
    text-align: center;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    border: 1px solid lightgrey;
}

.my-card > img {
    width: 95%;
    margin: 0 auto;
}

.flag {
    width: 2rem;
    aspect-ratio: 1 / 1;
}

small {
    align-items: flex-end;
}

</style>