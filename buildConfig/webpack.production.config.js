const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AutoPrefixer = require('autoprefixer')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const paths = require('./paths')

//Start of CSS Loader
const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[hash:base64:5]',
    }
}

const CSSLoader = {
    loader: 'css-loader',
    options: {
        modules: false,
    }
}

const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: [
            AutoPrefixer({
                browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
            })
        ]
    }
}
//End of CSS Loader

module.exports = {
    mode: 'production',
    entry: paths.appSrc + '/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                include: paths.appSrc,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss)$/,
                exclude: /\.module\.(scss)$/,
                include: paths.appSrc,
                use: [
                    MiniCSSExtractPlugin.loader,
                    CSSLoader,
                    postCSSLoader,
                    "sass-loader"
                ]
            },
            {
                test: /\.module\.(scss)$/,
                include: paths.appSrc,
                use: [
                    MiniCSSExtractPlugin.loader,
                    CSSModuleLoader,
                    postCSSLoader,
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(paths.root, 'html') + '/index.prod.html'
        }),
        new MiniCSSExtractPlugin({
            filename: "styles.[contenthash:6].css"
        })
    ],
    output: {
        filename: 'bundle.[contenthash:6].js',
        path: path.resolve(paths.root, 'dist')
    }
};
