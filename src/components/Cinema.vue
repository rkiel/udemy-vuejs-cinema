<template>
<div id="overview">
  <div id="main">
    <movie-list v-bind:genre="genre" v-bind:time="time"></movie-list>
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
      time: []
    };
  },
  components: {
    MovieList,
    MovieFilter
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
