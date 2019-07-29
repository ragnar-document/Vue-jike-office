module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://bitc.jiker.vip",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
