<template>
  <div>
    <h1>MY WISHLIST</h1>
    <form class="watch-list-form" @submit="submmitInputMovieData">
      <input class="fs-5 text-center" type="text" v-model="inputData" />
      <button class="fs-5 addBtn">Add</button>
    </form>
    <WatchListItemVue
      v-for="movieData in watchList"
      :key="movieData.movieId"
      :movieData="movieData.inputData"
    />
  </div>
</template>

<script>
import WatchListItemVue from "@/components/WatchListItem.vue";

export default {
  name: "WatchListView",
  data() {
    return {
      inputData: "",
    };
  },
  computed: {
    watchList() {
      return this.$store.state.watchList;
    },
  },
  components: {
    WatchListItemVue,
  },
  methods: {
    submmitInputMovieData(event) {
      event.preventDefault();
      if (this.inputData) {
        this.$store.dispatch("submmitInputMovieData", this.inputData);
        this.inputData = "";
      } else {
        alert("PUT YOUR WISH MOVIE");
      }
    },
  },
};
</script>

<style>
input {
  border-radius: 10px;
}
.addBtn {
  margin-left: 10px;
  border-radius: 5px;
}
.watch-list-form {
  margin-bottom: 50px;
}
</style>
