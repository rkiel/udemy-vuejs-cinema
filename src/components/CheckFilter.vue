<template>
<div v-bind:class="{'check-filter': true, active: checked}">
  <span class="checkbox" v-on:click="checkFilter"></span>
  <span class="check-filter-title">{{title}}</span>
</div>
</template>

<script>
import bus from '../util/bus';

export default {
  props: ['title', 'category'],
  data() {
    return {
      checked: false
    };
  },
  methods: {
    checkFilter() {
      this.checked = !this.checked;
      bus.global.$emit(bus.events.checkFilter, this.category, this.title, this.checked);
    }
  }
};
</script>
