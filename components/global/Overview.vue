<template>
  <div id="overview-section">
    <div class="theme-container">
      <div class="os-flexbox">
        <img src="~/static/img/stock-photo-sm.jpeg" alt class="os-img">
        <div class="os-divider"></div>
        <div class="os-content-block">
          <div class="os-content">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview"
};
</script>

<style lang="scss" scoped>
#overview-section {
  overflow: hidden;
  width: 100%;
  padding: 50px 0;
  background-color: rgba(0, 0, 0, 0.15);
  margin-top: 15px;
}

.os-flexbox {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}

.os-img {
  display: block;
  margin: 0 auto;
  object-fit: cover;
  width: 80vw;
  height: 80vw;
  max-width: 250px;
  max-height: 250px;
  border-radius: 50%;
  border: 4px solid white;
}

.os-divider {
  background-color: rgb(118, 53, 104);
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 10px;
    margin: 0 50px;
  }
}

.os-content-block {
  position: relative;
  width: 100%;
  margin: 50px 0 0 0;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
}

.os-content {
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
