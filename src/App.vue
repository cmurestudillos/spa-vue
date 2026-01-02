<template>
  <div id="app">
      <router-view class="container main-container"></router-view>
     <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/shared/footer/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    FooterComponent,
  }
}
</script>