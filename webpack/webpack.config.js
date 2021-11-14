const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/public/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist/public')
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/i,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, 'css-loader']
        }, {
            test: /\.s[ac]ss$/i,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, 'css-loader', 'sass-loader']
        }, {
            test: /\.html$/i,
            loader: "html-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/public/index.html')
        }),
        new MiniCssExtractPlugin()
    ]
};