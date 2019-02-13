<template>
  <div id="delivery-page">
    <Feature src="/img/stock-photo-lg.jpeg" title="Delivery" subtitle="Black Seed is mobile."/>

    <SectionTitle title="HOW IT WORKS" lineColor="#201311"/>
    <HowItWorks/>
    <GoogleMap/>
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

import HowItWorks from "~/components/delivery/HowItWorks";
import GoogleMap from "~/components/delivery/GoogleMap";

export default {
  name: "market",
  components: {
    TopNavigation,
    Feature,
    SectionTitle,
    HowItWorks,
    GoogleMap,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
</style>
