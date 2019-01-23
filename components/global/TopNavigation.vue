<template>
  <div class="topnav" id="TopNavigation">
    <nuxt-link to="/" class="tn-home-link tn-main-link"></nuxt-link>
    <nuxt-link to="/market" class="tn-market-link tn-main-link">Market</nuxt-link>
    <nuxt-link to="/delivery" class="tn-delivery-link tn-main-link">Delivery</nuxt-link>
    <!-- <nuxt-link to="/membership" class="tn-membership-link tn-main-link">Membership</nuxt-link> -->
    <nuxt-link to="/about" class="tn-about-link tn-main-link">About</nuxt-link>
    <nuxt-link to="/contact" class="tn-contact-link tn-main-link">Contact</nuxt-link>
    <!-- <nuxt-link to="/membership" class="tn-become-member-link tn-main-link">Become a Member</nuxt-link> -->
    <a href="javascript:void(0);" class="icon tn-main-link" v-on:click="openNav">
      <i class="fa fa-bars"></i>
    </a>

    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>
      <nuxt-link to="/" class="tn-market-link">Home</nuxt-link>
      <nuxt-link to="/market" class="tn-market-link">Market</nuxt-link>
      <nuxt-link to="/delivery" class="tn-delivery-link">Delivery</nuxt-link>
      <!-- <nuxt-link to="/membership" class="tn-membership-link">Membership</nuxt-link> -->
      <nuxt-link to="/about" class="tn-about-link">About</nuxt-link>
      <nuxt-link to="/contact" class="tn-contact-link">Contact</nuxt-link>
      <!-- <nuxt-link to="/membership" class="tn-become-member-link">Become a Member</nuxt-link> -->
    </div>
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
    },
    openNav: function() {
      document.getElementById("mySidenav").style.width = "80%";
    },
    closeNav: function() {
      document.getElementById("mySidenav").style.width = "0";
    }
  }
};
</script>

<style lang="scss" scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #201311;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
}

/* Style the links inside the navigation bar */
.topnav a.tn-main-link {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 16px 16px;
  text-decoration: none;
  font-size: 17px;

  &.tn-become-member-link {
    float: right;
    background-color: #efa61e;
    font-weight: bold;
  }

  &.tn-home-link {
    background-color: #efa61e;
    padding: calc(56.8px / 2);
  }

  &.nuxt-link-exact-active {
    color: #efa61e;
  }

  &.icon {
    display: none;
  }
}

.topnav:not(.responsive) a.tn-main-link {
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
  .topnav a.tn-main-link:not(:first-child) {
    display: none;
  }
  .topnav a.tn-main-link.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
// @media screen and (max-width: 768px) {
//   .topnav.responsive {
//     position: relative;
//   }
//   .topnav.responsive a.tn-main-link.icon {
//     position: absolute;
//     right: 0;
//     top: 0;
//   }
//   .topnav.responsive a.tn-main-link {
//     float: none;
//     display: block;
//     text-align: left;
//   }
// }

/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  max-width: 400px;
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  white-space: nowrap;

  &.nuxt-link-exact-active {
    color: #efa61e;
  }
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
