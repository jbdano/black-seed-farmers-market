<template>
  <div id="home-page">
    <Feature
      src="/img/stock-photo-lg.jpeg"
      title="Market"
      subtitle="Come visit us on your next trip into Worcester."
    />
    <SectionTitle title="VISIT US" lineColor="#201311"/>
    <VisitUs/>
    <SectionTitle title="MARKET" lineColor="#EFA61E"/>
    <Market/>
    <SectionTitle title="FEDERAL PROGRAMS" lineColor="#201311"/>
    <FederalPrograms/>
    <SectionTitle title="MERCHANDISE" lineColor="#EFA61E"/>
    <Merchandise/>
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

import VisitUs from "~/components/market/VisitUs";
import Market from "~/components/market/Market";
import FederalPrograms from "~/components/market/FederalPrograms";
import Merchandise from "~/components/market/Merchandise";

export default {
  name: "market",
  components: {
    TopNavigation,
    Feature,
    SectionTitle,
    VisitUs,
    Market,
    FederalPrograms,
    Merchandise,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
</style>
