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
      // console.log(this.text)

      this.getSeries()
      // console.log(this.text)

    },

    getMovie() {
            // SEARCH MOVIE
            axios.get(this.store.baseUrl + this.store.endPointMovie + '?language=' + this.store.parameters.language + '&api_key=' + this.store.parameters.api_key + "&query=" + this.text )
            .then( response => { 
            console.log(response.data.results)
            this.store.movies = response.data.results
            })

    },
    getSeries() {
              //  SEARCH TV SERIES
            axios.get(this.store.baseUrl + this.store.endPointTv + '?language=' + this.store.parameters.language + '&api_key=' + this.store.parameters.api_key + "&query=" + this.text )
            .then( response => { 
            console.log(response.data.results)
            this.store.series = response.data.results;
            })
            // EMPTY INPUT FIELD AFTER SEARCH
            this.text = '';
    }
    
  },

}

</script>

<template>

  <form
    class="d-flex justify-content-center align-items-center"
    @submit.prevent="makeSearch">

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
      <button type="submit" class="btn btn-danger text-uppercase">cerca</button>
    </div>

  </form>

</template>

<style scoped></style>
