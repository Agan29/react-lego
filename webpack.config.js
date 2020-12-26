const { join, resolve } = require('path');
const { merge } = require('webpack-merge');
const argv = require('minimist')(process.argv.slice(2));
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = argv.mode || 'development';
const mergeConfig = require(`./config/webpack.${mode}.js`);

const webpackBaseConfig = {
    entry: {
        app: resolve('./src/index.tsx'),
    },
    cache: {
        type: 'filesystem',
    },
    mode,
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                include: [resolve('src')],
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: 3,
                        },
                    },
                    'babel-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // {
                    //   loader: 'thread-loader',
                    //   options: {
                    //     workers: 3,
                    //   }
                    // },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                    'less-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            // common.less 自己的公共变量路径
                            resources: [
                                resolve(
                                    './src/static/css/vars.less',
                                ),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif|eot|woff|woff2|ttf|otf)$/,
                type: 'asset',
            },
        ],
    },
    plugins: [
        new WebpackBuildNotifierPlugin({
            title: 'LEGO Build',
            suppressSuccess: true,
            logo: resolve(__dirname, './public/lego.png'),
        }),
        new WebpackBar({
            name: 'LEGO',
            color: 'hotpink',
            profile: true,
        }),
    ],
    resolve: {
        modules: ['node_modules', resolve('src')],
        extensions: ['.js', '.ts', '.tsx', 'jsx'],
        alias: {
            '@': resolve('./src'),
            '@imgs': resolve('./src/static/imgs'),
            '@css': resolve('./src/static/css'),
            '@utils': resolve('./src/utils'),
            '@layout': resolve('./src/layout')
        },
    },
};
module.exports = merge(webpackBaseConfig, mergeConfig);
