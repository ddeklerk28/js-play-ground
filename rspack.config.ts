const path = require('path');
const rspack = require('@rspack/core');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index.ts',
    mode: isProduction ? 'production' : 'development',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    experiments: {
        css: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'builtin:swc-loader',
                        options: {
                            jsc: {
                                parser: {
                                    syntax: 'ecmascript',
                                },
                            },
                        },
                    },
                ],
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'builtin:swc-loader',
                        options: {
                            jsc: {
                                parser: {
                                    syntax: 'typescript',
                                },
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [rspack.CssExtractRspackPlugin.loader, 'css-loader'],
                type: 'javascript/auto',
            }
        ],
    },
    plugins: [
        new rspack.HtmlRspackPlugin({
            template: './src/index.html',
        }),
        new rspack.CssExtractRspackPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    devServer: {
        port: 8080,
        hot: true,
        compress: true,
        open: true,
    },
};