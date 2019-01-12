<template>
  <div id="home-page">
    <TopNavigation/>
    <TheFeature/>
    <TheOverview/>
  </div>
</template>

<script>
import TopNavigation from "~/components/global/TopNavigation";
import TheFeature from "~/components/home/TheFeature";
import TheOverview from "~/components/home/TheOverview";

export default {
  name: "home",
  components: {
    TopNavigation,
    TheFeature,
    TheOverview
  }
};
</script>

<style lang="scss" scoped>
</style>
