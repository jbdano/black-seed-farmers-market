<template>
  <div id="home-page">
    <TopNavigation/>
    <TheFeature/>
    <TheOverview/>
    <SectionTitle title="The Model"></SectionTitle>
    <TheModel/>
  </div>
</template>

<script>
import TopNavigation from "~/components/global/TopNavigation";
import SectionTitle from "~/components/global/SectionTitle";
import TheFeature from "~/components/home/TheFeature";
import TheOverview from "~/components/home/TheOverview";
import TheModel from "~/components/home/TheModel";

export default {
  name: "home",
  components: {
    TopNavigation,
    TheFeature,
    TheOverview,
    SectionTitle,
    TheModel
  }
};
</script>

<style lang="scss" scoped>
</style>
