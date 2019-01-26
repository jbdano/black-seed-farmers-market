<template>
  <div id="contact-us">
    <div class="theme-container">
      <p>
        Have a question about our products? Interested in partnering with us? Or just want to say Hello? Fill out the form below and we will reply as soon as we can. Or, you can reach us by phone during normal business hours at
        <strong>508-XXX-XXXX.</strong>
      </p>
      <form>
        <div class="cu-flexbox">
          <div class="cu-flex cu-flex-30">1</div>
          <div class="cu-flex cu-flex-30">2</div>
          <div class="cu-flex cu-flex-30">3</div>
          <div class="cu-flex cu-flex-60">4</div>
          <div class="cu-flex cu-flex-30 cu-flex-empty"></div>
          <div class="cu-flex cu-flex-30">5</div>
          <div class="cu-flex cu-flex-60 cu-flex-empty"></div>
          <div class="cu-flex cu-flex-60">6</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss" scoped>
#contact-us {
  overflow: hidden;
  width: 100%;
}

.cu-flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 50px 0;
  @media screen and (min-width: 1024px) {
    width: 90%;
  }
}
.cu-flex {
  height: 70px;
  border: 1px solid black;
  padding-right: 10px;
  background-color: orange;
  margin-bottom: 15px;
  width: 100%;
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-align: center;

  @media screen and (min-width: 768px) {
    &-30 {
      width: 33%;
    }
    &-60 {
      width: 66%;
    }
  }

  &-empty {
    background-color: transparent;
    border: none;
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
}
</style>
