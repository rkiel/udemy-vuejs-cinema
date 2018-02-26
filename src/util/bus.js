import Vue from 'vue';

export default {
  global: new Vue(),
  events: {
    checkFilter: 'check-filter',
    setDay: 'set-day'
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
    },
    setDay(day) {
      this.day = day;
    }
  }
};
