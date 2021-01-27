const path = require('path');
const paths = require('./paths')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')


module.exports =  env => {
    return {
        entry: path.resolve(paths.appSrc, 'index.tsx'),
        mode: 'development',
        devServer: {
            contentBase: paths.appSrc,
            host: "0.0.0.0",
            clientLogLevel: 'warning',
            port: 10000,
            hot: true,
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|mjs)$/,
                    include: paths.appSrc,
                    use: [{
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env', {
                                        'targets': 'defaults'
                                    }
                                ],
                                '@babel/preset-react'
                            ]
                        }
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            fix: true
                        }
                    }]
                },
                {
                    enforce: 'pre',
                    test: /\.(ts|tsx)$/,
                    include: paths.appSrc,
                    use: {
                        loader: "ts-loader",
                    }
                },
                {
                    test: /\.(css|scss)/,
                    include: paths.appSrc,
                    use: [
                        {
                            loader: MiniCSSExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: { auto: true }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(paths.root, 'html') + '/index.dev.html'
            }),
            new MiniCSSExtractPlugin({
                filename: '[name].bundle.css',
                chunkFilename: '[id].css'
            })
        ],
        output: {
            filename: 'bundle.js',
            path: path.resolve(paths.root, 'dist')
        }
    }
};
