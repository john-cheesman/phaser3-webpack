const path = require('path')
//const webpack = require('webpack')

module.exports = env => {
    return {
        entry: {
            app: './src/index.js',
            vendor: ['phaser']
        },
        output: {
            filename: '[name].bundle.js',
            path: path.join(__dirname, 'dist'),
            publicPath: "/"
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist')
            }
        },
  //      plugins: [
  //          new webpack.DefinePlugin({
  //              'CANVAS_RENDERER': JSON.stringify(true),
  //              'WEBGL_RENDERER': JSON.stringify(true)
  //          })
 //       ]
    }
}

