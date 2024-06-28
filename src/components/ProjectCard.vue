<script>
    export default {
        props: {
            project: Object,
        },    
        data() {
            return {
                imgUrlBase: 'http://127.0.0.1:8000/storage',
            }
        }
    }
</script>

<template>
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
</template>

<style lang="scss" scoped>

</style>