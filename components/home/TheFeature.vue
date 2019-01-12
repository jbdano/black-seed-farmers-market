<template>
  <div id="feature-section">
    <img src="/img/stock-photo-lg.jpeg" class="fs-feature-img">
    <div class="fs-feature-filter"></div>
    <div class="fs-content-block">
      <div class="theme-container">
        <h1>Visit Us</h1>
        <p>During the month of November to add that special, local something to your Thanksgiving meal.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFeature"
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
    rgba(118, 53, 104, 0.85)
  );
}

.fs-content-block {
  position: absolute;
  display: block;
  width: 100%;
  bottom: 0;
  color: white;
}
</style>
