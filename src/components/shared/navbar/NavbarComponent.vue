<template>
  <div>
    <navbar class="navbar navbar-expand-lg navbar-dark">
      <router-link :to="'/heroes'">
        <img src="/assets/img/A-64.svg" width="30" height="30" title="Superheroes" alt="Superheroes" />
      </router-link>
      <a class="navbar-brand" href="#">
        <nav-item href="/heroes" class="active">Heroes</nav-item>
      </a>
    </navbar>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  components: {},
};
</script>
