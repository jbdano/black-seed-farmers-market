<template>
  <div id="home-page">
    <Feature
      src="img/stock-photo-lg.jpeg"
      title="Market"
      subtitle="Come visit us on your next trip into Worcester."
    />
    <SectionTitle title="VISIT US" lineColor="rgb(118, 53, 104)"/>
    <VisitUs/>
    <SectionTitle title="MARKET" lineColor="orange"/>
    <TheFooter/>
    <!-- Put last to resolve z-index sorting -->
    <TopNavigation activepage="market"/>
  </div>
</template>

<script>
import TopNavigation from "~/components/global/TopNavigation";
import SectionTitle from "~/components/global/SectionTitle";
import TheFooter from "~/components/global/TheFooter";
import Feature from "~/components/global/Feature";

import VisitUs from "~/components/market/VisitUs";

export default {
  name: "market",
  components: {
    TopNavigation,
    Feature,
    SectionTitle,
    VisitUs,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
</style>
