<template>
  <div :class="{ 'line-through' : islineThrough }"
    @click="toggleLineThrough"
  >
  {{ movieData }}
  </div>
</template>

<script>
export default {
  name: 'WatchListItem',
  props: {
    movieData: String,
  },
  data() {
    return {
      islineThrough: false, 
    }
  },
  methods: {
    toggleLineThrough() {
      this.islineThrough = !this.islineThrough
    }
  }
}
</script>

<style>
.line-through {
  text-decoration: line-through;
}
</style>