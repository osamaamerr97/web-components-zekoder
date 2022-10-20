module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-postcss",
    "@storybook/addon-essentials",
    "@socheatsok78/storybook-addon-vuetify"
  ],
  "framework": "@storybook/vue",
  core: {
      builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
      config.module.rules.push(
          {
              test: /\.scss$/,
              use: [
                  'vue-style-loader',
                  'style-loader',
                  'css-loader',
                  'sass-loader'
              ]
          });
      return config;
  },
}
