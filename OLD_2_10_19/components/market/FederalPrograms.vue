<template>
  <div id="federal-programs">
    <div class="theme-container">
      <h5>Black Seed accepts a number of federally-funded programs to help you and your family gain access to nutritious food.</h5>
      <div class="fp-flexbox">
        <article class="fp-card">
          <p class="fp-card-title lazy-fade">Suppliemental Nutrition Assistance Program (SNAP)</p>
          <img class="fp-card-img" src="/img/stock-photo-sm.jpeg" alt>
          <p class="fp-card-desc">
            Provides a monthly benefit to buy nutritious foods to those who meet the financial and nonfinancial requirepemtns.
            <a
              href="#"
            >Learn More</a>
          </p>
        </article>
        <article class="fp-card">
          <p class="fp-card-title lazy-fade">Farmers Market Nutrition
            <br>Program
          </p>
          <img class="fp-card-img" src="/img/stock-photo-sm.jpeg" alt>
          <p class="fp-card-desc">
            Gives seniors and families coupons to buy fresh fruits and vegetables at farmers markets.
            <a
              href="#"
            >Learn More</a>
          </p>
        </article>
        <article class="fp-card">
          <p class="fp-card-title lazy-fade">Women, Infants, & Children Nutrition Program (WIC)</p>
          <img class="fp-card-img" src="/img/stock-photo-sm.jpeg" alt>
          <p class="fp-card-desc">
            Is a nutrition program that provides healthy foods, nutrition education, breatfeeding support, and referrals to healthcare and other services, free of charge, to Massachusetts families who qualify.
            <a
              href="#"
            >Learn More</a>
          </p>
        </article>
        <article class="fp-card">
          <p class="fp-card-title lazy-fade">Healthy Incentives Program
            <br>(HIP)
          </p>
          <img class="fp-card-img" src="/img/stock-photo-sm.jpeg" alt>
          <p class="fp-card-desc">
            Is a part of SNAP that helps you buy more fruits and vegetables for your household.
            <a
              href="#"
            >Learn More</a>
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FederalPrograms"
};
</script>

<style lang="scss" scoped>
#federal-programs {
  overflow: hidden;
  width: 100%;
}

.fp-flexbox {
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0;
}

.fp-card {
  flex: 1 1 100%;
  padding: 40px;
  @media screen and (max-width: 1023px) {
    &:not(:last-child) {
      border-bottom: 2px dashed #201311;
    }
  }
  @media screen and (min-width: 1024px) {
    flex: 1 1 50%;
    border: 0;
    &:nth-child(1),
    &:nth-child(2) {
      border-bottom: 2px dashed #201311;
    }
    &:nth-child(2),
    &:nth-child(4) {
      border-left: 2px dashed #201311;
    }
  }

  .fp-card-title {
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
  }

  .fp-card-img {
    width: 80%;
    height: auto;
    margin: 25px auto;
    display: block;
  }

  .fp-card-desc {
    text-align: justify;
    a {
      text-transform: uppercase;
      color: #212529;
      font-weight: bold;
      text-decoration: underline;
    }
  }
}
</style>
