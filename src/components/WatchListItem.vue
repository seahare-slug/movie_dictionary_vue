<template>
  <div
    class="wish-movie"
    :class="{ 'cancel-wish-movie': islineThrough }"
    @click="toggleLineThrough"
  >
    {{ movieData }}
  </div>
</template>

<script>
export default {
  name: "WatchListItem",
  props: {
    movieData: String,
  },
  data() {
    return {
      islineThrough: false,
    };
  },
  methods: {
    toggleLineThrough() {
      this.islineThrough = !this.islineThrough;
    },
  },
};
</script>

<style>
.cancel-wish-movie {
  text-decoration: line-through;
  opacity: 0.4;
}
.wish-movie {
  background-color: rgb(72, 84, 84);
  margin: 10px;
  font-size: 2rem;
  color: aliceblue;
  border-radius: 10px;
}
</style>
