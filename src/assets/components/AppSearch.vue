<script>

name: 'AppSearch',
data() {
    return {
        text: ''
    }
},


</script>

<template>
    <form class="d-flex justify-content-center align-items-center">

        <div class="me-2">
            <label class="visually-hidden" for="titlename">earch a title</label>

            <input type="text" id="titlename" class="form-control" v-model.trim="text" placeholder="Search a title">
        </div>

        <div>
            <button type="submit" class="btn btn-primary"></button>
        </div>
       
        
    </form>
</template>


<style scoped>

</style>