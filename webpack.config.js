const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');  // help webpack load bundle.js file into an HTML file

module.exports = {
    // mode: process.env.NODE_ENV,
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './client/index.html'
        })
    ]
}