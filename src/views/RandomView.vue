<template>
  <div class="sub-page">
    <h1>WE CAN RECOMMAND FOR YOU !!</h1>
    <div class="pick-btn" @click="getRandomMovie">💚</div>
		<div id="wrapRandomMovie" class="d-none">
			<img class="random-img"
        :src="`https://image.tmdb.org/t/p/original${ movieJsonDataPosterPath }`"
        alt="poster">
			<div>
				<h3 class="movie-title">{{ movieJsonDataTitle }}</h3>
			</div>
		</div>
  </div>
</template>

<script>
import _ from "lodash"
import axios from "axios"
export default {
  name: 'RandomView',
  data() {
    return {
      movieJsonDataPosterPath: null,
      movieJsonDataTitle: null,
      movieJsonDataOverview: null,
    }
  },
  methods: {
    getRandomMovie() {
      const movieURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=d8571ea4e34547d3f50e1b1d59d7945d&language=ko-KR&page=1"
      axios.get(movieURL)
        .then((response) => {
          const randomMovie = _.sample(response.data.results)
          this.movieJsonDataPosterPath = randomMovie.poster_path
          this.movieJsonDataTitle = randomMovie.title
          this.movieJsonDataOverview = randomMovie.overview
          const wrapRandomMovie = document.querySelector("#wrapRandomMovie")
          wrapRandomMovie.classList.remove("d-none")
          wrapRandomMovie.classList.add("d-flex")
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
}
</script>

<style>
.movie-title {
  text-align: center;
  font-weight: bolder;
}

.pick-btn {
  cursor: pointer;
  font-size: 4rem;
}

#wrapRandomMovie {
  margin: 0 auto;
}

.random-img {
  width: 15vw;
}
</style>