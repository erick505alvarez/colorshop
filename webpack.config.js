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
            },
            {
                test: /.(s(a|c)ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        static: {
            publicPath: path.join(__dirname, '/client')
        },
        compress: true,
        port: 8080,
        hot: true,
        open: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            // template: './client/index.html'
            template: path.join(__dirname, '/client/index.html')
        })
    ]
}

// package.json scripts
// "start": "webpack-dev-server --mode development --open --hot",
// "start": "webpack --mode development",

// devServer.watchFiles: ['src/**/*', 'client/**/*']