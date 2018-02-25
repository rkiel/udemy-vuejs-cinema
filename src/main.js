import Vue from 'vue';
import VueResource from 'vue-resource';

import './style.scss';

import Cinema from './components/Cinema.vue';

Vue.use(VueResource); // addes this.$http

const app = new Vue({
  el: '#app',
  components: {
    Cinema
  }
});
