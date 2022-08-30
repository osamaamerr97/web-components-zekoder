const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "remoto",
    projectName: "zekoder-web-components",
    webpackConfigEnv,
  });

  const config = merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ["vue-loader"]
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ],
    },
    externals: ["vue", "vue-router", /^@remoto\/.+/],
    plugins: [new VueLoaderPlugin()],
  });

  return config;
};