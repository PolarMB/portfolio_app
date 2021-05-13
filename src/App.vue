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
// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
