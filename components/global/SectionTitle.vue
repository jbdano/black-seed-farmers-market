<template>
  <div class="section-title">
    <div class="theme-container">
      <div class="st-flexbox">
        <h3 class="st-text" v-text="title"></h3>
        <div class="st-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: ["title"]
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
}

.st-line {
  background-color: orange;
  height: 4px;
  width: 100%;
}
</style>
