<template>
  <div id="home-page">
    <TopNavigation/>
    <TheFeature/>
  </div>
</template>

<script>
import TopNavigation from "~/components/global/TopNavigation";
import TheFeature from "~/components/home/TheFeature";

export default {
  name: "home",
  components: {
    TopNavigation,
    TheFeature
  }
};
</script>

<style lang="scss" scoped>
</style>
