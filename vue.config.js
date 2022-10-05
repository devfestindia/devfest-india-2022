module.exports = {
  css: {
    extract: { ignoreOrder: true },
  },
  configureWebpack: {
    output: {
      crossOriginLoading: "anonymous",
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  productionSourceMap: false,
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: "DevFest Jalandhar",
    workboxPluginMode: "InjectManifest",
    themeColor: "#3D7FF5",
    msTileColor: "#3D7FF5",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      background_color: "#ffffff",
    },
    workboxOptions: {
      swSrc: "./src/sw.js",
      swDest: "service-worker.js",
    },
  },
}
