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
        config.module.rules.find(rule => RegExp(rule.test).toString() === '/\\.css$/').use.find(rule => rule.loader.includes('\\css-loader') ? rule.options = { modules: true } : null);
        config.module.rules.push(
            {
                test: /\.scss$/,
                sideEffects: true,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        )
        return config;
    },
}
