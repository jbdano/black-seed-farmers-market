<template>
  <div id="about-page">
    <Feature src="/img/stock-photo-lg.jpeg" title="About Us" subtitle="Our mission."/>
    <Overview>
      <h3>
        <strong>Why shop at Black Seed Farmers Market?</strong>
      </h3>
      <p>
        <strong>
          <i>Our market empowers community members to take their health into their own hands through access to healthier food choices.</i>
        </strong>
      </p>
      <p>In addition to providing access to amazing food, we also create impact across our network:
        <br>Impact for our youth workers.
        <br>Impact for Worcester.
        <br>Impact for our partners.
        <br>
      </p>
    </Overview>
    <SectionTitle title="OUR STORY" lineColor="#EFA61E"/>
    <OurStory/>
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
import Overview from "~/components/global/Overview";

import OurStory from "~/components/about/OurStory";

export default {
  name: "about",
  components: {
    TopNavigation,
    Feature,
    Overview,
    SectionTitle,
    OurStory,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
</style>