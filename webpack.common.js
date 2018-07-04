const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const template = require('html-webpack-template');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        polyfill: './src/polyfill.js',
        index: './src/app.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            // Required
            inject: false,
            template: template,

            // Optional
            title: 'Kiree &hearts; devaajaelämää',
            meta: [
                {
                    name: 'description',
                    content: 'Kiree\'s personal Github Page'
                }
            ]
        })
    ],
    output: {
        filename: "[name].app.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};
