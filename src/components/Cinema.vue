<template>
<div id="overview">
  <div id="main">
    <movie-list v-bind:genre="genre"
                v-bind:time="time"
                v-bind:movies="movies"
                v-bind:day="day"></movie-list>
    <movie-filter></movie-filter>
  </div>
</div>
</template>

<script>
import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

import MovieList from './MovieList.vue';
import MovieFilter from './MovieFilter.vue';

import bus from '../util/bus';

export default {
  data() {
    return {
      genre: [],
      time: [],
      movies: [],
      day: moment()
    };
  },
  components: {
    MovieList,
    MovieFilter
  },
  async created() {
    bus.global.$on(bus.events.checkFilter, bus.methods.checkFilter.bind(this));

    try {
      const response = await this.$http.get('/api');
      this.movies = response.data;
    } catch (e) {
      this.movies = [];
    }
  }
};
</script>
