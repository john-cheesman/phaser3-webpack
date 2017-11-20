const path = require('path')
const webpack = require('webpack')
const env = process.env.NODE_ENV

let config = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: "/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({  
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]
}

if (env === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = config

