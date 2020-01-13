const path = require('path');
const reduce = require('lodash/reduce');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const LoadablePlugin = require('@loadable/webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const cwd = process.cwd();
const json = require(path.resolve(cwd, './package')); // eslint-disable-line

const alias = reduce(json.dependencies, (acc, v, k) => {
    acc[k] = path.resolve(cwd, 'node_modules', k);
    return acc;
}, {});


module.exports = (env) => {
    const isProd = env ? !!env.prod : false;
    const config = isProd ? {} : require(path.resolve(cwd, './src/config')); // eslint-disable-line

    return {
        context: path.resolve(process.cwd(), 'src'),
        optimization: {
            minimizer: [
                isProd ? new TerserPlugin() : () => {},
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        target: 'web',
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss'],
            alias
        },
        devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
        entry: './client.jsx',
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js',
            path: path.resolve(process.cwd(), 'dist'),
            publicPath: '/'
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            // options: {
                            //     rootMode: 'upward',
                            // }
                        },
                        // {
                        //     loader: 'eslint-loader'
                        // }
                    ],
                    // exclude: /node_modules/,
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'css-hot-loader',
                        !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: isProd ? '[hash:base64]' : '[local]--[hash:base64:5]'
                                }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                },
                {
                    test: /\.ejs$/,
                    use: 'raw-loader'
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.USERS_ENDPOINT': JSON.stringify(process.env.USERS_ENDPOINT),
                'process.env.PORT': JSON.stringify(process.env.PORT),
                'process.env.port': JSON.stringify(process.env.port),
                'process.env.host': JSON.stringify(process.env.host),
                'process.env.HOST': JSON.stringify(process.env.HOST),
                'process.env.dest_port': JSON.stringify(process.env.dest_port),
                'process.env.DEST_PORT': JSON.stringify(process.env.DEST_PORT),
                'process.env.DESTINATION_HOST': JSON.stringify(process.env.DESTINATION_HOST),
                'process.env.DOCKER_HOST': JSON.stringify(process.env.DOCKER_HOST)
            }),
            new HtmlWebpackPlugin({
                template: 'index.ejs',
                filename: 'index.ejs',
                favicon: 'assets/favicon.ico',
                meta: {
                    charset: 'UTF-8',
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
                },
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true
                }
            }),
            // new CopyPlugin([
            //     { from: path.join(cwd, 'dist/index.ejs'), to: path.join(cwd, 'functions') }
            // ]),
            new MiniCssExtractPlugin({
                filename: !isProd ? '[name].css' : '[name].[hash].css',
                chunkFilename: !isProd ? '[id].css' : '[id].[hash].css',
            }),
            new LoadablePlugin(),
            !isProd && process.cwd().includes('webserver1') ? new BundleAnalyzerPlugin({}) : new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false,

            })
        ],
        // devServer: {
        //     port: config.port + 1,
        //     open: true,
        //     host: process.env.NODE_ENV_DOCKER ? '0.0.0.0' : 'localhost',
        //     index: 'index.ejs',
        //     proxy: {
        //         '/': { target: `${config.host}:${config.port}` },
        //     }
        // }
    };
};
