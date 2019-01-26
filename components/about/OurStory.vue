<template>
  <div id="our-story">
    <div class="theme-container">
      <div class="os-flexbox-overview">
        <img class="os-flex-img" src="/img/stock-photo-sm.jpeg" alt>
        <div class="os-flex-content">
          <p>Black Seed started as a pop-up farmers market and have evolved to into a permanent year-round indoor market in the heart of the city of Worcester. We provide access to delicious, healthy food produced locally and support our community through sustainable development and ethical business practices. LOREM IPSUM</p>
        </div>
      </div>
      <div class="os-flexbox-cards">
        <div class="os-flex-card">
          <header>
            <h3>Youth Impact</h3>
          </header>
          <div class="os-card-body">
            <i class="far fa-user"></i>
            <p>We sell the freshest fruits and vegetables sourced from local farms in Massachusetts. Our selection changes regularly so stop in today to see what is on the shelves.</p>
          </div>
        </div>
        <div class="os-flex-card">
          <header>
            <h3>Worcester Impact</h3>
          </header>
          <div class="os-card-body">
            <i class="far fa-heart"></i>
            <p>We also sell a variety of indulgent items. Treat yourself to a jar of fresh-mad honey, a bar of fair-trade chocolate, or coffee sourced sustainable from around the world.</p>
          </div>
        </div>
        <div class="os-flex-card">
          <header>
            <h3>Partner Impact</h3>
          </header>
          <div class="os-card-body">
            <i class="far fa-handshake"></i>
            <p>We offer locally made goods including soaps, scarves, handbags, and more.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurStory"
};
</script>

<style lang="scss" scoped>
#our-story {
  width: 100%;
  overflow: hidden;
}

.os-flexbox-overview {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}

.os-flex-img {
  height: 80vw;
  max-height: 250px;
  width: 80vw;
  max-width: 250px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 15px auto 40px;
  @media screen and (min-width: 768px) {
    margin: 0 50px 0 0;
  }
}

.os-flex-content {
  max-width: 700px;
  @media screen and (min-width: 768px) {
    margin: 25px 0 0 0;
  }
}

.os-flexbox-cards {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
}

.os-flex-card {
  flex: 1;
  border: 2px solid #57243d;
  border-radius: 5px;
  margin: 0 15px 100px;

  header {
    text-align: center;
    background-color: #57243d;
    padding: 35px 0;

    h3 {
      color: white;
      font-weight: 500;
    }
  }

  .os-card-body {
    padding: 20px 20px 50px;
    i {
      color: #efa61e;
      font-size: 80px;
      font-weight: 300;
      margin: 35px 0;
      text-align: center;
      display: block;
    }
  }
}
</style>
