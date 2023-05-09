import { reactive } from "vue";

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3/',
    endPointMovie: '/search/movie',
    parameters: {
        api_key: '9af83964190f4e1b60da985a0d3087d0'
    }
})