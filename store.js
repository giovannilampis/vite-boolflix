import { reactive } from "vue";

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3',
    imageBaseUrl: 'https://image.tmdb.org/t/p/w342',
    endPointMovie: '/search/movie',
    parameters: {
        api_key: '9af83964190f4e1b60da985a0d3087d0',
        query: '',
        language: 'it-IT'
    },
    movies: [],
    languages: {
        "it-IT": ""
    }
})

