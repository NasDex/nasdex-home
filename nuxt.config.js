
module.exports = {
  mode: "universal",
  router: {
    middleware: "i18n"
  },
  telemetry: false,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nasdex' || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    // script: [
    //   {
    //     src: "/js/iconfont.js"
    //   },
    //   {
    //     src: "/js/tronweb.js"
    //   }
    // ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~assets/css/main.scss", "~assets/css/animate.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~plugins/i18n.js",
    "~plugins/qrCode.js",
    "~plugins/api.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  axios: {
    proxy: true
  },
  // proxy: {
  //   "/v1/ifglobal": {
  //     target: "https://app.kokang.me/",
  //     pathRewrite: {
  //       "^/v1/ifglobal": "/"
  //     }
  //   }
  // },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
    babel: {
      plugins: [
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
      ]
    }
  }
};
