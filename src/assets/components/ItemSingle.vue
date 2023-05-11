<script>
import {store} from '../../../store'

export default {
    data() {
        return {
            store,
            availableFlags: ['it', 'en', 'de', 'es', 'fr'],
            isFlipped: false
        }
    },
    methods: {
        toggleCard() {
            this.isFlipped = !this.isFlipped;
        }
    },
    computed: {
        starsVote() {
            return Math.ceil(this.movie.vote_average / 2)
        }
    },
    props: {
        movie: Object
    }
    
}

</script>

<template>

    <div @click="toggleCard" class="my-card mx-3 col-12 col-md-4 col-lg-2 text-center">

        <div :class="{ 'is-flipped': isFlipped }" class="card-inner">

            <div class="card-face card-face-front">

                <img class="mb-2" :src="movie.poster_path? store.imageBaseUrl + movie.poster_path : 'https://picsum.photos/342/510'" alt="{{ movie.title }}">
                <small class="mb-2">{{ movie.title }}</small>
                <h6>{{ movie.original_title }}</h6>
        
                <div class="d-flex justify-content-center align-items-center py-2">
                    <div v-if="availableFlags.includes(movie.original_language)" class="d-flex justify-content-center align-items-center">
                        <img class="flag mb-2" :src="'../../../public/images/' + movie.original_language + '.png'" :alt="movie.original_language + ' flag'">
                    </div>
                    <div v-else class="mb-2">{{ movie.original_language }}</div>
                    <small v-for="x in 5" class="fa-star" :class="x <= starsVote ? 'fa-solid' : 'fa-regular'"></small>
                </div>

            </div>

            <div class="card-face card-face-back">

                <div class="card-content">
                
                    <h5 class="py-2">{{ movie.title }}</h5>

                    <p>{{ movie.overview }}</p>

                    <small v-for="x in 5" class="py-2 fa-star" :class="x <= starsVote ? 'fa-solid' : 'fa-regular'"></small>
    
                </div>

            </div>

        </div>
  
    </div>
    
</template>

<style scoped>

* {
    margin: 0;
    padding: 0;
}
.my-card {
    height: 28.125rem;
    margin-bottom: 1rem;
    text-align: center;
    padding: 0.5rem;
    border: 1px solid lightgrey;
    perspective: 1000px;
}
.card-inner {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
}

.card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
}
.card-face > img {
    width: 95%;
    margin: 0 auto;
}

.card-face > small {
    font-size: 0.8rem;
}

.fa-star {
    font-size: 0.7rem;
}
.flag {
    width: 2rem;
    aspect-ratio: 1 / 1;
}

.card-face-front {
    display: flex;
    flex-direction: column;
    align-items:stretch;
    justify-content: start;
}

.card-face-back {
    transform: rotateY(180deg);
    overflow-y: auto;
}
.card-content {
    width: 100%;
    height: 100%;
}
.card-content > p {
    font-size: 0.8rem;
}
.card-inner.is-flipped {
    transform: rotateY(180deg);
}

</style>