<template>
  <div id="contact-page">
    <Feature
      src="/img/stock-photo-lg.jpeg"
      title="Contact Us"
      subtitle="We would love to hear from you."
    />
    <SectionTitle title="CONTACT" lineColor="#EFA61E"/>
    <Contact/>
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

import Contact from "~/components/contact/Contact";

export default {
  name: "contact",
  components: {
    TopNavigation,
    Feature,
    SectionTitle,
    Contact,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
</style>