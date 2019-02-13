<?php ?>

<div class="topnav" id="TopNavigation">
  <nuxt-link to="/" class="tn-home-link tn-main-link"></nuxt-link>
  <nuxt-link to="/Market" class="tn-market-link tn-main-link">Market</nuxt-link>
  <nuxt-link to="/Delivery" class="tn-delivery-link tn-main-link">Delivery</nuxt-link>
  <nuxt-link to="/About" class="tn-about-link tn-main-link">About</nuxt-link>
  <nuxt-link to="/Contact" class="tn-contact-link tn-main-link">Contact</nuxt-link>
  <a href="javascript:void(0);" class="icon tn-main-link" v-on:click="openNav">
    <i class="fa fa-bars"></i>
  </a>
</div>

<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>
  <nuxt-link to="/" class="tn-market-link">Home</nuxt-link>
  <nuxt-link to="/Market" class="tn-market-link">Market</nuxt-link>
  <nuxt-link to="/Delivery" class="tn-delivery-link">Delivery</nuxt-link>
  <nuxt-link to="/About" class="tn-about-link">About</nuxt-link>
  <nuxt-link to="/Contact" class="tn-contact-link">Contact</nuxt-link>
</div>