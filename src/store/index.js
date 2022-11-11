import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    watchList: [],
    movieId: 0,
  },
  getters: {
  },
  mutations: {
    SUBMMIT_INPUT_MOVIE_DATA(state, movieData) {
      state.movieId += 1
      state.watchList.push({inputData: movieData, movieId: state.movieId})
    }
  },
  actions: {
    submmitInputMovieData(context, movieData) {
      context.commit('SUBMMIT_INPUT_MOVIE_DATA', movieData)
    }
  },
  modules: {
  }
})
