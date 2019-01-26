<template>
  <div id="market-page">
    <Feature
      src="/img/stock-photo-lg.jpeg"
      title="Visit Us"
      subtitle="During the month of November to add that special, local something to your Thanksgiving meal."
    />
    <Overview>
      <h3>WHO WE ARE</h3>
      <p>We have a passion for good food that you can feel good about buying.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque excepturi voluptas asperiores tenetur. Et, quos? Alias eaque illum earum quis ab ea cumque. Vitae nemo quibusdam est cumque quae.</p>
    </Overview>
    <SectionTitle title="THE MODEL" lineColor="#EFA61E"/>
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
import Overview from "~/components/global/Overview";
import TheModel from "~/components/home/TheModel";

export default {
  name: "home",
  components: {
    TopNavigation,
    Feature,
    Overview,
    SectionTitle,
    TheModel,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
</style>
