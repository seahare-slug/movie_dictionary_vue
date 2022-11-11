<template>
	<div class="main-page">
		<div class="jb-box">
      <video muted autoplay loop>
        <source src="./../assets/background.mp4" type="video/mp4" />
        <strong>Your browser does not support the video tag.</strong>
      </video>
    </div>
    <div class="jb-text">
			<p>Hello</p>
    </div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
.main-page {
	height: 100px;
}

.jb-box {
  width: 100%;
  height: calc(100vh - 100px);
  overflow: hidden;
  margin: 0px auto;
  position: relative;
}

video {
  width: 100%;
}
.jb-text {
  position: absolute;
  top: 30%;
  width: 100%;
}
.jb-text p {
  margin-top: -24px;
  text-align: center;
  font-size: 118px;
  color: #ffffff;
}
</style>