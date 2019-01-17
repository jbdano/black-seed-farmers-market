<template>
  <footer>
    <div class="theme-container">
      <div class="ft-main">
        <h3>Black Seed Farmers Market</h3>
        <div class="ft-flexbox">
          <div class="ft-block ft-block-address">
            <p>484 Main Streetm Suite 180</p>
            <p>Worcester, MA 01608</p>
          </div>
          <div class="ft-block ft-block-phone">
            <p>Monday - Friday 11 AM - 5 PM</p>
            <p>(508) XXX-XXXX</p>
          </div>
        </div>
        <a class="ft-social" href="#">
          <i class="fab fa-facebook-f ft-social-icon"></i>
        </a>
        <a class="ft-social" href="#">
          <i class="fab fa-instagram ft-social-icon"></i>
        </a>
        <div class="ft-email">
          <p>info@blackseedfarmersmarket.com</p>
        </div>
        <a class="ft-creds" href="https://told.design" target="_blank">
          Made with
          <i class="fas fa-heart"></i> by Told.Design
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style lang="scss" scoped>
footer {
  overflow: hidden;
  width: 100%;
  padding: 50px 0;
  background-color: rgb(118, 53, 104);
  color: white;
}

.ft-main {
  position: relative;
}

.ft-flexbox {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}

.ft-block {
  margin-right: 50px;

  p {
    margin-bottom: 5px;
  }
}

.ft-social {
  display: inline-block;
  position: relative;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: lightgray;
  margin: 0 25px 25px 0;
  @media screen and (min-width: 768px) {
    margin: 0 25px 0 0;
  }

  &:hover {
    background-color: white;
  }
}

.ft-social-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 35px;
  color: rgb(118, 53, 104);
}

.ft-email {
  @media screen and (min-width: 768px) {
    display: inline-block;
  }

  p {
    margin-bottom: 5px;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }
}

.ft-creds {
  margin-bottom: 0;
  color: white;
  @media screen and (min-width: 768px) {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  i {
    color: orange;
  }
}
</style>
