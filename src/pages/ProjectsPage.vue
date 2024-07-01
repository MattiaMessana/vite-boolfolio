<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
components: {
    ProjectCard,
},
 data() {
    return {
        projects: [],
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
            <ProjectCard :project="project" />
        </div>
    </div>
</div>

</template>

<style scoped lang="scss">

</style>