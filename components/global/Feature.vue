<template>
  <div id="feature-section">
    <img v-bind:src="src" class="fs-feature-img">
    <div class="fs-feature-filter"></div>
    <div class="fs-content-block">
      <div class="theme-container">
        <h1 v-text="title" class="fs-title"></h1>
        <h4 v-text="subtitle" class="fs-subtitle"></h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feature",
  props: ["src", "title", "subtitle"]
};
</script>

<style lang="scss" scoped>
#feature-section {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 70vh;
  min-height: 300px;
}

.fs-feature-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fs-feature-filter {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(118, 53, 104, 0.75)
  );
}

.fs-content-block {
  position: absolute;
  display: block;
  width: 100%;
  bottom: 0;
  color: white;
}

.fs-title {
  color: white;
}

.fs-subtitle {
  margin-bottom: 40px;
  font-weight: normal;
  color: white;
}
</style>
