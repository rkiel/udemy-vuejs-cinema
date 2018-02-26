import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Overview from '../components/Overview.vue';
import Detail from '../components/Detail.vue';

export default new VueRouter({
  routes: [
    { name: 'home', path: '/', component: Overview },
    { name: 'movie', path: '/movie/:id', component: Detail },
    { name: 'notFound', path: '*', redirect: { name: 'home' } }
  ]
});
