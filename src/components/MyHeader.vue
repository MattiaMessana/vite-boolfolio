<script>
export default {
 
}
</script>

<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand  router-link-active" :to="{ name: 'home' }">
        <img class="logo" src="../assets/logoMM.png" alt="logo">
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <router-link class="nav-link link" :to="{ name: 'about' }">About Me</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link link" :to="{ name: 'project' }">My Works</router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>

</template>

<style lang="scss" scoped>

.logo {
  width: 50px;
}

nav {
  background-color: black !important;
  .link:hover {
    text-decoration: underline;
  }
}

.router-link-active {
  text-decoration: underline;
}

.link {
  color: white;
}
</style>