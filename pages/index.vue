<template>
  <div id="home-page">
    <Feature
      src="/img/stock-photo-lg.jpeg"
      title="Visit Us"
      subtitle="During the month of November to add that special, local something to your Thanksgiving meal."
    />
    <TheOverview/>
    <SectionTitle title="The Model"></SectionTitle>
    <TheModel/>
    <TheFooter/>
    <!-- Put last to resolve z-index sorting -->
    <TopNavigation/>
  </div>
</template>

<script>
import TopNavigation from "~/components/global/TopNavigation";
import SectionTitle from "~/components/global/SectionTitle";
import TheFooter from "~/components/global/TheFooter";
import Feature from "~/components/global/Feature";
import TheOverview from "~/components/home/TheOverview";
import TheModel from "~/components/home/TheModel";

export default {
  name: "home",
  components: {
    TopNavigation,
    Feature,
    TheOverview,
    SectionTitle,
    TheModel,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
</style>
