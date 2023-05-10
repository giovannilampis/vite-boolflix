<script>
import {store} from '../../../store'

export default {
    data() {
        return {
            store,
            availableFlags: ['it', 'en', 'de', 'es', 'fr']
        }
    },
    computed: {
        starsVotation() {
            return Math.ceil(this.serie.vote_average / 2)
        }
    },
    props: {
        serie: Object
    }
    
}

</script>

<template>

    <div class="my-card mx-3 col-12 col-md-4 col-lg-2 text-center">
        <img class="mb-3" :src="serie.poster_path ? store.imageBaseUrl + serie.poster_path : 'https://picsum.photos/342/450'" alt="{{ serie.title }}">
        <div class="mb-2">{{ serie.title }}</div>
        <h4>{{ serie.original_title }}</h4>
        <div v-if="availableFlags.includes(serie.original_language)">
            <img class="flag mb-2" :src="'../../../public/images/' + serie.original_language + '.png'" :alt="serie.original_language + ' flag'">
        </div>
        <div v-else class="mb-2">{{ serie.original_language }}</div>
        <div>
            <small v-for="y in 5" class="fa-star" :class="y <= starsVotation ? 'fa-solid' : 'fa-regular'"></small>

            <!-- <small>{{ serie.vote_average }}</small> -->
        </div>        
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