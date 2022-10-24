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
    const rules = config.module.rules.filter((rule) => RegExp(rule.test).toString() !== "/\\.css$/");
    rules.push(
      {
        test: /\.(sc|c)ss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'sass-loader'
        ]
      }
    )
    config.module.rules = rules;
    return config;
  },
}
