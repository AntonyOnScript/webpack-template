const path = require('path')

module.exports = {
    mode: 'development', // or production for 1 line code
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env'
                        ]
                    }
                }
            }
        ]
    },
    devtool: 'source-map'
}