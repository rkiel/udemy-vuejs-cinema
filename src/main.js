import Vue from 'vue';
import './style.scss';

import genres from './util/genres';

const movieList = {
  template: `<div id="movie-list">
                   <div v-for="movie in filteredMovies" class="movie">{{movie.title}}</div>
                 </div>`,
  data() {
    return {
      movies: [
        { title: 'Pulp fiction', genre: genres.CRIME },
        { title: 'Home Alone', genre: genres.COMEDY },
        { title: 'Austin Powers', genre: genres.COMEDY }
      ]
    };
  },
  props: ['genre', 'time'],
  methods: {
    moviePassesGenreFilter(movie) {
      if (!this.genre.length) {
        return true;
      } else {
        return this.genre.find(genre => movie.genre === genre);
      }
    }
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(this.moviePassesGenreFilter);
    }
  }
};

const checkFilter = {
  template: `<div v-bind:class="{'check-filter': true, active: checked}">
               <span class="checkbox" v-on:click="checkFilter"></span>
               <span class="check-filter-title">{{title}}</span>
             </div>`,
  props: ['title'],
  data() {
    return {
      checked: false
    };
  },
  methods: {
    checkFilter() {
      this.checked = !this.checked;
      this.$emit('check-filter', 'genre', this.title, this.checked);
    }
  }
};

const movieFilter = {
  data() {
    return {
      genres
    };
  },
  template: `<div id="movie-filter">
                   <h2>Filter results</h2>
                   <div class="filter-group">
                     <check-filter v-for="genre in genres" v-bind:title="genre" v-on:check-filter="checkFilter"></check-filter>
                   </div>
                 </div>`,
  components: {
    'check-filter': checkFilter
  },
  methods: {
    checkFilter(category, title, checked) {
      this.$emit('check-filter', category, title, checked);
    }
  }
};

const root = {
  el: '#app',
  data: {
    genre: [],
    time: []
  },
  components: {
    'movie-list': movieList,
    'movie-filter': movieFilter
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

const app = new Vue(root);
