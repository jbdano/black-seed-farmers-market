<template>
  <div id="google-maps">
    <div class="theme-container">
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  head: {
    script: [
      {
        src:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBDI8NGakLgbE0pm8E7nz9YRSyt79XIEoQ",
        async: false,
        defer: false
      }
    ]
  },
  mounted() {
    // The location of Uluru
    var uluru = { lat: 42.262881, lng: -71.799387 };
    var uluru2 = { lat: 42.2648, lng: -71.803999 };

    var center_lat = (uluru.lat + uluru2.lat) / 2;
    var center_lng = (uluru.lng + uluru2.lng) / 2;
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: center_lat, lng: center_lng }
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      label: { text: "Mercantile Center", fontWeight: "bold" }
    });
    var marker2 = new google.maps.Marker({
      position: uluru2,
      map: map,
      label: { text: "Fallon Health", fontWeight: "bold" }
    });
  }
};
</script>

<style lang="scss" scoped>
#google-maps {
  width: 100%;
  overflow: hidden;
  margin: 50px 0;
}
#map {
  padding-bottom: 75vh;
  border: 5px solid #57243d;
}
</style>
