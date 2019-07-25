module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://edu.jiker.vip",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
