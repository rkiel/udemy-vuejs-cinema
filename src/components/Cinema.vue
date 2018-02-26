<template>
<router-view v-bind:genre="genre"
             v-bind:time="time"
             v-bind:movies="movies"
             v-bind:day="day"></router-view>
</template>

<script>
import moment from 'moment-timezone';

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
  async created() {
    bus.global.$on(bus.events.checkFilter, bus.methods.checkFilter.bind(this));
    bus.global.$on(bus.events.setDay, bus.methods.setDay.bind(this));

    try {
      const response = await this.$http.get('/api');
      this.movies = response.data;
    } catch (e) {
      this.movies = [];
    }
  }
};
</script>
