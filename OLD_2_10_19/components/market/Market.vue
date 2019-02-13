<template>
  <div id="market-section">
    <div class="theme-container">
      <div class="mkt-flexbox">
        <article class="mkt-card">
          <h4>Produce</h4>
          <img class="mkt-card-img" src="/img/stock-photo-lg.jpeg" alt>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias neque fugiat inventore, voluptatibus nam nulla harum, delectus odit itaque repudiandae, architecto exercitationem unde laborum a eius explicabo totam necessitatibus maiores.</p>
        </article>
        <article class="mkt-card">
          <h4>Treat Yourself</h4>
          <img class="mkt-card-img" src="/img/stock-photo-lg.jpeg" alt>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias neque fugiat inventore, voluptatibus nam nulla harum, delectus odit itaque repudiandae, architecto exercitationem unde laborum a eius explicabo totam necessitatibus maiores.</p>
        </article>
        <article class="mkt-card">
          <h4>Not Just Food</h4>
          <img class="mkt-card-img" src="/img/stock-photo-lg.jpeg" alt>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias neque fugiat inventore, voluptatibus nam nulla harum, delectus odit itaque repudiandae, architecto exercitationem unde laborum a eius explicabo totam necessitatibus maiores.</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Market"
};
</script>

<style lang="scss" scoped>
#market-section {
  background-color: lightgrey;
  overflow: hidden;
  width: 100%;
}

.mkt-flexbox {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
}

.mkt-card {
  flex: 1;
  margin: 50px 0;
  padding: 0 25px;

  h4 {
    font-weight: bold;
    text-transform: uppercase;
    white-space: nowrap;
    text-align: center;
  }

  .mkt-card-img {
    width: 65vw;
    height: 65vw;
    max-width: 275px;
    max-height: 275px;
    object-fit: cover;
    display: block;
    border-radius: 50%;
    border: 5px solid white;
    margin: 35px auto;
  }
}
</style>
