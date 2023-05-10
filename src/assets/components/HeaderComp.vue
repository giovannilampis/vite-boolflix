<script >

import AppSearch from './AppSearch.vue';

export default {
  name: 'HeaderComp',
  components: {
    AppSearch
  }
}

</script>

<template>
  
  <header class="">

    <div class="container d-flex justify-content-between align-items-center">

      <h1 class="text-uppercase">boolflix</h1>

      <AppSearch/>

    </div>

  </header>

  <main>


  </main>

</template>

<style scoped>

header {
  height: 6rem;
  padding: 3rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background: linear-gradient(to bottom, black, transparent);
  border-bottom: 1px solid lightgrey;
}

header > div {
  height: 100%;
}

h1 {
  color: rgb(209, 31, 53);
}

</style>