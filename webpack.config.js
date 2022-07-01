const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');

module.exports = {
    mode: 'development',
    output: {
        clean: true
    },
    module:{
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/i,
                exclude: /style.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /style.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                        {
                            loader: 'file-loader',
                        },
                    ]
            },
    ]},
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Webpack-config',
            //favicon: './src/assets/img/creando.png'
            inject: 'body'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
            linkType: 'text/css'
        }),

        new CopyPlugin({
            patterns: [
                { from: 'src/img', to: 'assets/img/'}
            ]
        })

    ]
};