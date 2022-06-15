module.exports = {
    publicPath: '/miaoMovie',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/ajax': {
                target: "https://m.maoyan.com",
                changeOrigin: true
            }
        }
    }
}