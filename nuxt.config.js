const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        integrity:
          "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        crossorigin: "anonymous"
      }
    ]
  },

  server: {
    port: 8000, // default: 3000
    host: "0.0.0.0" // default: localhost
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [{ src: "~/static/css/LazyView.css" }],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/LazyView.js", ssr: false }
    // {
    //   src:
    //     "https://maps.googleapis.com/maps/api/js?key=AIzaSyBDI8NGakLgbE0pm8E7nz9YRSyt79XIEoQ",
    //   async: true,
    //   defer: true
    // }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ,
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt"
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
