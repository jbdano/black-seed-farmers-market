<template>
  <div id="model-section">
    <div class="theme-container">
      <div class="ms-main-container">
        <div class="ms-flexbox">
          <article class="ms-card">
            <header>
              <i class="far fa-handshake"></i>
              <h4>THE SOURCE</h4>
            </header>
            <div
              class="ms-card-main"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quae, autem maxime doloremque laboriosam dolor dolorem nostrum, amet natus provident tempora velit sunt voluptate aspernatur dolores accusamus delectus cumque ex?</div>
          </article>
          <article class="ms-card">
            <header>
              <i class="fa fa-shopping-cart"></i>
              <h4>THE EXPERIENCE</h4>
            </header>
            <div
              class="ms-card-main"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at labore porro quaerat, eos ad, omnis consectetur itaque earum nihil aut dicta eius, soluta inventore excepturi debitis odio totam quidem?</div>
          </article>
          <article class="ms-card">
            <header>
              <i class="fas fa-users"></i>
              <h4>THE COMMUNITY IMPACT</h4>
            </header>
            <div
              class="ms-card-main"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ab eius, exercitationem, voluptates culpa quia temporibus obcaecati similique consequuntur aut quae harum sint omnis doloremque! Sapiente optio ipsam laborum. Illo!</div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheModel"
};
</script>

<style lang="scss" scoped>
#model-section {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 50px;
}

.ms-main-container {
  border: 2px dashed rgb(118, 53, 104);
}

.ms-flexbox {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}

.ms-card {
  flex: 1;
  padding: 40px;

  header {
    text-align: center;
    i {
      margin: 0 0 25px 0;
      font-size: 80px;
      color: orange;
    }
    h4 {
      color: rgb(118, 53, 104);
      margin-bottom: 25px;
    }
  }
}
</style>
