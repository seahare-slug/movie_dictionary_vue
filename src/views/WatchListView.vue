<template>
	<div>
    <h1>
      보고싶은 영화
    </h1>
    <form @submit="submmitInputMovieData">
      <input type="text" v-model="inputData">
      <button>Add</button>
    </form>
    <WatchListItemVue
      v-for="movieData in watchList"
      :key="movieData.movieId"
      :movieData="movieData.inputData"
    />
  </div>
</template>

<script>
import WatchListItemVue from '@/components/WatchListItem.vue';

export default {
  name: 'WatchListView',
  data() {
    return {
      inputData: "",
    }
  },
  computed: {
    watchList() {
      return this.$store.state.watchList
    } 
  },
  components: {
    WatchListItemVue,
  },
  methods: {
    submmitInputMovieData(event) {
      event.preventDefault()
      if (this.inputData) {
        this.$store.dispatch('submmitInputMovieData', this.inputData
        )
        this.inputData = ""
      } else {
        alert('입력해!')
      }
    }
  }
}
</script>

<style>

</style>