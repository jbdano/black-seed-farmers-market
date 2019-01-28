<template>
  <div id="how-it-works">
    <div class="theme-container">
      <p>We are thrilled to bring you the convenience of offering out products through delivery to multiple location in downtown Worcester. Simply download our mobile app and place your order today!</p>
      <p>We currently deliver to the following locations with more to come soon:</p>
      <p>
        <strong>Mercantile Center</strong>, 100-120 Front Street Worcester, MA
        <br>
        <strong>Fallon Health</strong>,10 Chestnut Street Worcester, MA
      </p>
      <a href="#">
        <img class="hiw-apple-badge" src="/img/apple-badge.svg" alt>
      </a>
      <a href="#">
        <img class="hiw-google-badge" src="/img/google-play-badge.png" alt>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowItWorks"
};
</script>

<style lang="scss" scoped>
#how-it-works {
  overflow: hidden;
  width: 100%;
}

.hiw-apple-badge {
  height: 60px;
  width: auto;
  margin-right: 50px;
}

.hiw-google-badge {
  height: 85px;
  width: auto;

  @media screen and (max-width: 767px) {
    margin-left: -13px;
    height: 80px;
  }
}
</style>
