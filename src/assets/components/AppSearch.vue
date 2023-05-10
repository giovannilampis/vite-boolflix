<script>
import axios from 'axios';
import {store} from '../../../store'

export default {
  name: 'AppSearch',
  data() {
    return {
        text: '',
        store
    }
},
  methods: {

    makeSearch() {
      this.getMovie()
        console.log(this.text)
    },

    getMovie() {
            // SEARCH MOVIE
            axios.get(this.store.baseUrl + this.store.endPointMovie + '?language=' + this.store.parameters.language + '&api_key=' + this.store.parameters.api_key + "&query=" + this.text )
            .then( response => { 
             console.log(response.data.results)
              this.store.movies = response.data.results
             })
            //  SEARCH TV SERIES
              axios.get(this.store.baseUrl + this.store.endPointTv + '?language=' + this.store.parameters.language + '&api_key=' + this.store.parameters.api_key + "&query=" + this.text )
             .then( response => { 
              console.log(response.data.results)
               this.store.movies = [...this.store.movies, ...response.data.results];
              })

    }
  },

}

</script>

<template>

  <form
    class="d-flex justify-content-center align-items-center"
    @submit.prevent="getMovie">

    <div class="me-2">
      <label class="visually-hidden" for="titlename">earch a title</label>

      <input
        type="text"
        id="titlename"
        class="form-control"
        v-model.trim="text"
        placeholder="Search a title"
      />
    </div>

    <div>
      <button type="submit" class="btn btn-primary text-uppercase">cerca</button>
    </div>

  </form>

</template>

<style scoped></style>
