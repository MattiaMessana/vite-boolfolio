<script>
import axios from 'axios';

export default {
 data() {
    return {
        projects: [],
        imgUrlBase: 'http://127.0.0.1:8000/storage',
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
                <img class="card-img-top" 
                 :src="project.cover_img ? `${imgUrlBase}/${project.cover_img}` : `https://placehold.co/500x300?text=immagine+non+disponibile`" 
                 :alt="project.title">
                <div class="card-body ">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.slug }}</p>
                    <p class="card-text">{{ project.category ? project.category.name : `nessuna categoria` }}</p>
                    <div>
                        <span class="badge text-bg-primary mx-1" v-for="tech in project.technologies">{{ tech.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped lang="scss">

</style>