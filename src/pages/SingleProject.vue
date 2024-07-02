<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects : [],
        }

    },
    created() {
        const slug = this.$route.params.slug;
        axios.get(`http://127.0.0.1:8000/api/project/${slug}`)
        .then((resp) => {
            this.projects = resp.data.results;
        })
        .catch((error) => {
            if (error.response.status === 404) {
                this.$router.push({ name: 'not-found'});
            }
        });
}};

</script>

<template>
    <div class="container mt-2" >
        <h1>Dettagli Progetto</h1>

        <div v-for="project in projects" >
            <h3>{{ project.title }}</h3>

        </div>

    </div>

</template>

<style scoped lang="scss">


</style>