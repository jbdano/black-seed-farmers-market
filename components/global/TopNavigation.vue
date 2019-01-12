<template>
  <div class="topnav" id="TopNavigation">
    <nuxt-link to="/" class="tn-home-link"></nuxt-link>
    <nuxt-link to="/market" class="tn-market-link active">Market</nuxt-link>
    <nuxt-link to="/delivery" class="tn-delivery-link">Delivery</nuxt-link>
    <nuxt-link to="/membership" class="tn-membership-link">Membership</nuxt-link>
    <nuxt-link to="/about" class="tn-about-link">About</nuxt-link>
    <nuxt-link to="/contact" class="tn-contact-link">Contact</nuxt-link>
    <nuxt-link to="/membership" class="tn-become-member-link">Become a Member</nuxt-link>
    <a href="javascript:void(0);" class="icon" v-on:click="toggleResponsiveNav">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "TopNavigation",
  methods: {
    toggleResponsiveNav: function(event) {
      var x = document.getElementById("TopNavigation");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 16px 16px;
  text-decoration: none;
  font-size: 17px;

  &.tn-become-member-link {
    float: right;
    background-color: orange;
    font-weight: bold;
  }

  &.tn-home-link {
    background-color: orange;
    padding: calc(56.8px / 2);
  }

  &.active {
    color: orange;
  }
}

.topnav:not(.responsive) a {
  &.tn-become-member-link {
    padding: 8px 16px;
    margin: 8px 50px 8px 0px;
    border-radius: 5px;
  }
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 768px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 768px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
