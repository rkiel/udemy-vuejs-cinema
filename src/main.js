import Vue from 'vue';
import './style.scss';

import genres from './util/genres';

const movieList = {
  template: `<div id="movie-list">
                   <div v-for="movie in movies" class="movie">{{movie.title}}</div>
                 </div>`,
  data() {
    return {
      movies: [{ title: 'Pulp fiction' }, { title: 'Home Alone' }, { title: 'Austin Powers' }]
    };
  }
};

const checkFilter = { template: `<div>Filter</div>` };

const movieFilter = {
  data() {
    return {
      genres
    };
  },
  template: `<div id="movie-filter">
                   <h2>Filter results</h2>
                   <div class="filter-group">
                     <check-filter v-for="genre in genres"></check-filter>
                   </div>
                 </div>`,
  components: {
    'check-filter': checkFilter
  }
};

const app = new Vue({
  el: '#app',
  components: {
    'movie-list': movieList,
    'movie-filter': movieFilter
  }
});