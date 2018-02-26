import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

import Vue from 'vue';

import VueResource from 'vue-resource';
Vue.use(VueResource); // addes this.$http

import Tooltip from './util/tooltip';
Vue.use(Tooltip);

import './style.scss';

import Cinema from './components/Cinema.vue';
import router from './util/router';

const app = new Vue({
  el: '#app',
  components: {
    Cinema
  },
  router
});
