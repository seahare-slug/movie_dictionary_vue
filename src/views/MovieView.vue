<template>
  <div class="sub-page">
    <h1>Top Rated Movie</h1>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <TopRatedMovieVue
      v-for="movieData in movieJsonData"
      :key="movieData.id"
      :movieData="movieData"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"
import TopRatedMovieVue from '@/components/TopRatedMovie.vue'

export default {
  name: 'MovieView',
  data() {
    return {
      movieJsonData: null,
    }
  },
  components: {
    TopRatedMovieVue,
  },
  methods: {
    getTopRatedMovie() {
      const movieURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=d8571ea4e34547d3f50e1b1d59d7945d&language=ko-KR&page=1"
      axios.get(movieURL)
        .then((response) => {
          this.movieJsonData = response.data.results
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created() {
    this.getTopRatedMovie()
  },
}
</script>