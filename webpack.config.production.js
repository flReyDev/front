const HtmlWebpackPlugin     = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const CopyPlugin            = require("copy-webpack-plugin");

const CssMinimizer          = require('css-minimizer-webpack-plugin')
const TerserPlugin          = require('terser-webpack-plugin')

const path = require('path');

module.exports = {
    mode: 'production',
    output: {
        clean: true,
        filename: 'main.[contenthash].js'
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
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
    ]},
    optimization:{
        minimize: true,
        minimizer: [
          new CssMinimizer(), //permiten minimizar el codigo css
          new TerserPlugin(), //permiten minimizar el codigo css
        ],
    },
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
            // Permite copiar los archivo estaticos a la carpeta dist
            patterns: [
                { from: 'src/img', to: 'assets/img/'}
            ]
        })

    ]
};