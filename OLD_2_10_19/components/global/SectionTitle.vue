<template>
  <div class="section-title">
    <div class="theme-container">
      <div class="st-flexbox">
        <h3 class="st-text" v-text="title"></h3>
        <div class="st-line" v-bind:style="{ 'background-color': lineColor }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: ["title", "lineColor"]
};
</script>

<style lang="scss" scoped>
.st-flexbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
}

.st-text {
  white-space: nowrap;
  margin: 0 25px 0 0;
  font-weight: bold;
}

.st-line {
  height: 3px;
  width: 100%;
}
</style>
