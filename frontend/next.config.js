const path = require("path");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.module.rules.push({
      test: /\.js$/,
      enforce: "post",
      use: "es3ify-loader"
    });

    return config;
  }
};
