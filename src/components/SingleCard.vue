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

    <div class="container">
        <h5>{{ project.title }}</h5>

    </div>

</template>

<style lang="scss" scoped>


</style>