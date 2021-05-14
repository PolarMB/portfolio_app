<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import './assets/styles/global_variables.scss';
import Header from './components/Header/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import './assets/styles/global_variables.scss';

  // Import Bootstrap and BootstrapVue source SCSS files
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

body {
  font-family: 'Montserrat', sans-serif, Avenir, Helvetica, Arial,;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  width: 100%;
}
</style>
