<template>
  <div id="app">
    <div class="bg-dark d-flex justify-content-between">
      <router-link to="/"
        ><img class="logo-image" src="./assets/logo.png" alt="netflix-logo"
      /></router-link>
      <nav class="d-flex align-items-center">
        <router-link to="/movie">Movie</router-link>
        <router-link to="/random">Random</router-link>
        <router-link to="/watchlist">WatchList</router-link>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  margin: 60px;
  font-weight: bold;
}

nav {
  width: 100%;
}

nav a {
  padding: 10px;
  margin: 20px;
  font-weight: bold;
  color: #355b82;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #be0f0f;
}

.sub-page {
  width: 70%;
  margin: 0 auto;
}

.logo-image {
  width: 200px;
  height: 100px;
}
</style>
