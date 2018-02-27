const path = require('path')
const webpack = require('webpack')

module.exports = env => {
    console.log(env.production)

    return {
        entry: {
            main: './src/index.js'
        },
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'dist'),
            publicPath: "/"
        },
        mode: env.production ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                },
                {
                    test: [/\.vert$/, /\.frag$/],
                    use: 'raw-loader'
                }
            ]
        },
        devServer: {
            contentBase: './dist'
        },
        plugins: [
            new webpack.DefinePlugin({
                'CANVAS_RENDERER': JSON.stringify(true),
                'WEBGL_RENDERER': JSON.stringify(true)
            })
        ]
    }
}

