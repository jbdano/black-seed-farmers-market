<template>
  <div id="feature-section">
    <img src="/img/stock-photo-lg.jpeg" class="fs-feature-img">
    <div class="fs-feature-filter">
      <div class="fs-content-block">
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
.feature-section {
  position: relative;
}

.fs-feature-img {
  position: absolute;
  width: 100%;
  height: 80vh;
  min-height: 300px;
  object-fit: cover;
}

.fs-feature-filter {
  position: absolute;
  width: 100%;
  height: 80vh;
  min-height: 300px;
  background-image: linear-gradient(
    rgba(255, 0, 0, 0),
    rgba(118, 53, 104, 0.85)
  );
}

.fs-content-block {
  position: absolute;
  display: block;
  bottom: 0;
  color: white;
  padding: 20px;
}
</style>
