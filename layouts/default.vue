<template>
  <nuxt/>
</template>

<script>
export default {};
</script>


<style lang="scss">
.theme-container {
  margin: 0 20px;

  @media screen and (min-width: 768px) {
    display: block;
    width: 750px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1024px) {
    width: 1000px;
  }
  @media screen and (min-width: 1200px) {
    width: 1150px;
  }
  @media screen and (min-width: 1920px) {
    width: 1300px;
  }
}

// FONT
h1 {
  font-size: calc(45px + (80 - 45) * ((100vw - 350px) / (1600 - 350)));
}
h2 {
  font-size: calc(35px + (45 - 35) * ((100vw - 350px) / (1600 - 350)));
}
h3 {
  font-size: calc(25px + (30 - 25) * ((100vw - 350px) / (1600 - 350)));
}
h4 {
  font-size: calc(22px + (25 - 22) * ((100vw - 350px) / (1600 - 350)));
}
h5 {
  font-size: calc(19px + (22 - 19) * ((100vw - 350px) / (1600 - 350)));
}

p,
span,
li,
a,
button {
  font-size: calc(17px + (17 - 17) * ((100vw - 350px) / (1600 - 350)));
}

a:hover {
  text-decoration-line: underline;
  text-decoration-style: dotted;
}
</style>
