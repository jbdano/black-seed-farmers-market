<template>
  <div id="home-page">
    <TopNavigation/>
    <TheFeature/>
    <TheOverview/>
    <SectionTitle title="The Model"></SectionTitle>
  </div>
</template>

<script>
import TopNavigation from "~/components/global/TopNavigation";
import SectionTitle from "~/components/global/SectionTitle";
import TheFeature from "~/components/home/TheFeature";
import TheOverview from "~/components/home/TheOverview";

export default {
  name: "home",
  components: {
    TopNavigation,
    TheFeature,
    TheOverview,
    SectionTitle
  }
};
</script>

<style lang="scss" scoped>
</style>
