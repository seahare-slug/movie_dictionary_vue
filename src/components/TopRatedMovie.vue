<template>
	<div class="col">
		<div class="card">
			<img class="card-img-top" :src="`https://image.tmdb.org/t/p/original${ movieData.poster_path }`" alt="poster">
			<div class="card-body">
				<div class="card-title">{{ movieData.title }}</div>
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
	}
}
</script>

<style>

</style>