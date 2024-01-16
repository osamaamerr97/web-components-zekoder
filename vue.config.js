module.exports = {
    css: {
        extract: false
    },
    productionSourceMap: false,
    lintOnSave: false,
    configureWebpack: {
        externals: [/(storybook)/, /(@vue)/, "vue-router"],
        output: {
            libraryExport: 'default'
        },
        optimization: {
            splitChunks: {
                chunks: 'async',
                minSize: 20000,
                maxSize: 50000,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                automaticNameDelimiter: '~',
                enforceSizeThreshold: 50000,
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            },
            minimize: true
        }
    }
};
