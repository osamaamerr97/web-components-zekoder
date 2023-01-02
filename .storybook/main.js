const BootstrapVueLoader = require('bootstrap-vue-loader')

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

        // Fix CSS Modules and SCSS
        let cssRules = config.module.rules.find(rule => RegExp(rule.test).toString() === '/\\.css$/').use
        cssRules.find(rule => rule.loader.includes('\\css-loader') ? rule.options = { modules: true } : null);
        config.module.rules.push(
            {
                test: /\.s(a|c)ss$/,
                sideEffects: true,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        )

        // Fix BootstrapVue
        config.plugins.push(new BootstrapVueLoader())

        return config;
    },
}
