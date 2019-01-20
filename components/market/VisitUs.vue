<template>
  <div id="visit-us">
    <div class="theme-container">
      <div class="vu-flexbox">
        <div class="vu-block vu-block-content">
          <div class="vu-content">
            <p>Suite 180, Denholm Building</p>
            <p>484 Main Street, Worcester MA</p>
            <p>Monday - Friday 11 AM - 5 PM</p>
          </div>
        </div>
        <div class="vu-block vu-block-img">
          <img src="img/stock-photo-lg.jpeg" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VisitUs"
};
</script>

<style lang="scss" scoped>
#visit-us {
  overflow: hidden;
  width: 100%;
}
.vu-flexbox {
  display: flex;
  flex-direction: column;
  border: 5px solid orange;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}
.vu-block {
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
}
.vu-block-content {
  position: relative;
  height: 50vw;
  font-weight: 600;
  background-color: orange;
  @media screen and (min-width: 768px) {
    height: auto;
  }

  .vu-content {
    position: absolute;
    padding: 0px 30px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    @media screen and (min-width: 1024px) {
      padding: 0px 50px;
    }
  }

  p {
    font-size: 4vw;
    color: white;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 1em;
      text-align: left;
    }
    @media screen and (min-width: 1024px) {
      font-size: 1.6em;
    }
  }
}
.vu-block-img {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
