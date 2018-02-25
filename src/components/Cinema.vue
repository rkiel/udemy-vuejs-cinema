<template>
<div id="overview">
  <div id="main">
    <movie-list v-bind:genre="genre" v-bind:time="time" v-bind:movies="movies"></movie-list>
    <movie-filter v-on:check-filter="checkFilter"></movie-filter>
  </div>
</div>
</template>

<script>
import MovieList from './MovieList.vue';
import MovieFilter from './MovieFilter.vue';

export default {
  data() {
    return {
      genre: [],
      time: [],
      movies: []
    };
  },
  components: {
    MovieList,
    MovieFilter
  },
  async created() {
    try {
      const response = await this.$http.get('/api');
      this.movies = response.data;
    } catch (e) {
      this.movies = [];
    }
  },
  methods: {
    checkFilter(category, title, checked) {
      if (checked) {
        this[category].push(title);
      } else {
        const index = this[category].indexOf(title);
        if (index != -1) {
          this[category].splice(index, 1);
        }
      }
    }
  }
};
</script>
