const { merge } = require('webpack-merge')
const configCommon = require('./webpack.config.common')

module.exports = merge(configCommon, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        hot: true,
        open:true
    }
})