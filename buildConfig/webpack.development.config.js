const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AutoPrefixer = require('autoprefixer')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const paths = require('./paths')

//CSS loader
const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[local]__[hash:base64:5]',
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

module.exports = {
    mode: 'development',
    entry: path.resolve(paths.appSrc, 'index.tsx'),
    devtool: 'inline-source-map',
    devServer: {
        host: "127.0.0.1",
        hot: true,
        contentBase: path.resolve(paths.appSrc, 'dist'),
        port: 10000
    },
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
                test: /\.(tsx)?$/,
                use: 'awesome-typescript-loader',
                exclude: path.join(paths.root, 'node_modules')
            },
            {
                test: /\.(scss)$/,
                exclude: /\.module\.(scss)$/,
                include: paths.appSrc,
                use: [
                    "style-loader",
                    CSSLoader,
                    postCSSLoader,
                    "sass-loader"
                ]
            },
            {
                test: /\.module\.(scss)$/,
                include: paths.appSrc,
                use: [
                    "style-loader",
                    CSSModuleLoader,
                    postCSSLoader,
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(paths.root, 'html') + '/index.dev.html'
        }),
        new MiniCSSExtractPlugin({
            filename: "[name].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(paths.root, 'dist')
    }
};
