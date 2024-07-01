<script>
  import MyHeader from "./components/MyHeader.vue";

  export default {
    components: {
      MyHeader,
    },

  };
</script>

<template>

  <MyHeader />
  <router-view></router-view>
  
</template>

<style lang="scss">

</style>