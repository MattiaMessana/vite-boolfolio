<script>
import axios from 'axios';

export default {
 data() {
    return {
        projects: []
    }
 },
 created() {
    axios.get('http://127.0.0.1:8000/api/project').then((resp) => {
        // console.log(resp.data.result);
        this.projects = resp.data.result;
    });
 },
}
</script>

<template>
<div class="container my-2">
    <div class="row row-cols-4">
        <div class="col my-2" v-for="project in projects">
            <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body ">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped lang="scss">

</style>