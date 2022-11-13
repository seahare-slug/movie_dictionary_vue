<template>
  <div class="col">
    <div class="card">
      <img
        class="card-img-top"
        :src="`https://image.tmdb.org/t/p/original${movieData.poster_path}`"
        alt="poster"
      />
      <div class="card-body">
        <div class="card-title">{{ movieData.title }}</div>
        <hr />
        <div class="card-text">{{ movieData.overview }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopRatedMovie",
  props: {
    movieData: Object,
  },
};
</script>

<style>
.card-title {
  font-weight: bold;
}

.card-img-top {
  height: 45vh;
}

.card-text {
  text-align: center;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
}
</style>
