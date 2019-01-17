<template>
  <div id="home-page">
    <TopNavigation/>
    <TheFeature/>
    <TheOverview/>
    <SectionTitle title="The Model"></SectionTitle>
    <TheModel/>
    <TheFooter/>
  </div>
</template>

<script>
import TopNavigation from "~/components/global/TopNavigation";
import SectionTitle from "~/components/global/SectionTitle";
import TheFooter from "~/components/global/TheFooter";
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
    TheModel,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
</style>
