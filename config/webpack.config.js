const argv = require('minimist')(process.argv.slice(2));
const mode = argv.mode || 'development';
process.env.NODE_ENV = mode;

const webpack = require('webpack');
const {
    resolve
} = require('path');
const {
    merge
} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
// const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const postcssNormalize = require('postcss-normalize');
const getClientEnvironment = require('./env');

// 获取 resolved path
const paths = require('./paths');

const isEnvDevelopment = mode === 'development';
const isEnvProduction = mode === 'production';
const getMergeConfig = require(`./webpack.${mode}.js`);
const name = process.env.npm_package_name;
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP === 'true';

// 定义一些正则
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

const cssModuleName = isEnvDevelopment ? '[local]--[hash:base64:5]' : '[local]--[hash:base64:5]';

// 分开写不太方便 放到一起吧
const getStyleLoaders = (cssOptions, ...preProcessors) => {
    const loaders = [
        isEnvProduction && MiniCssExtractPlugin.loader,
        isEnvDevelopment && require.resolve('style-loader'),
        {
            loader: 'thread-loader',
            options: {
                workers: 3,
            },
        },
        {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                postcssOptions: {
                    ident: 'postcss',
                    plugins: [
                        // require('postcss-flexbugs-fixes'),
                        require('postcss-preset-env')({
                            stage: 3,
                            features: {
                                'nesting-rules': true,
                            },
                            autoprefixer: {
                                flexbox: 'no-2009',
                            },
                            browsers: [
                                '>1%',
                                'last 4 versions',
                                'Firefox ESR',
                                'not ie < 11'
                            ]
                        }),
                        // postcssNormalize()
                    ]
                },
                sourceMap: shouldUseSourceMap
            }
        },
    ].filter(Boolean);
    if (preProcessors.length) {
        preProcessors.forEach(preProcessor => {
            if (typeof (preProcessor) !== 'string') {
                loaders.push(preProcessor);
            } else {
                loaders.push({
                    loader: require.resolve(preProcessor),
                });
            }
        });
    }
    return loaders;
};

const webpackBaseConfig = {
    cache: {
        type: 'filesystem',
    },
    mode,
    resolve: {
        modules: ['node_modules', paths.appSrc],
        extensions: paths.moduleFileExtensions.map(ext => `.${ext}`),
        alias: {
            '@': resolve(paths.appSrc),
            '@imgs': resolve('static/imgs'),
            '@css': resolve(paths.appSrc ,'static/css'),
            '@components': resolve(paths.appSrc ,'components'),
            '@hooks': resolve(paths.appSrc ,'hooks'),
            '@layout': resolve(paths.appSrc ,'layout'),
            '@widget': resolve(paths.appSrc ,'widget'),
            '@utils': resolve(paths.appSrc ,'utils'),
            '@common': resolve(paths.appSrc ,'common'),
            '@actions': resolve(paths.appSrc ,'common/actions'),
            '@api': resolve(paths.appSrc ,'common/api'),
            '@consts': resolve(paths.appSrc ,'common/consts'),
            "@request": resolve(paths.appSrc ,'utils/request'),
        },
        plugins: [
            // 只允许调用 src目录下面的文件
            new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
            // 处理moment里面的各种本土化语言，后面换成dayJs可以删了
            // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        ]
    },

    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.svg$/,
                use: ['babel-loader', '@svgr/webpack', 'url-loader']
            },
            {
                test: /\.(bmp|png|jpe?g|gif|eot|woff(2)|ttf|otf)$/,
                type: 'asset',
            },
            {
                oneOf: [
                    {
                        test: /\.(js|jsx|ts|tsx)$/,
                        include: [paths.appSrc],
                        exclude: /node_modules/,
                        use: [{
                                loader: 'thread-loader',
                                options: {
                                    workers: 3,
                                },
                            },
                            'babel-loader'
                        ],
                    },
                    {
                        test: cssRegex,
                        exclude: cssModuleRegex,
                        use: getStyleLoaders({
                            importLoaders: 1,
                            sourceMap: shouldUseSourceMap,
                        }),
                        sideEffects: true,
                    },
                    {
                        test: cssModuleRegex,
                        use: getStyleLoaders({
                            importLoaders: 1,
                            sourceMap: shouldUseSourceMap,
                            modules: {
                                localIdentName: cssModuleName
                            },
                        }),
                    },
                    {
                        test: lessRegex,
                        exclude: [lessModuleRegex, /node_modules/],
                        use: getStyleLoaders({
                                importLoaders: 2,
                                sourceMap: shouldUseSourceMap,
                            },
                            {
                                loader: 'less-loader', // compiles Less to CSS
                                options: {
                                    lessOptions: {
                                        javascriptEnabled: true,
                                    }
                                },
                            },
                            {
                                loader: 'sass-resources-loader',
                                options: {
                                    resources: [
                                        paths.publicLessPath
                                    ],
                                },
                            }
                        ),
                        sideEffects: true,
                    },
                    {
                        test: lessRegex,
                        include:  /node_modules\/antd/,
                        use: getStyleLoaders({
                                importLoaders: 2,
                                sourceMap: shouldUseSourceMap,
                            },
                            {
                                loader: 'less-loader', // compiles Less to CSS
                                options: {
                                    lessOptions: {
                                        javascriptEnabled: true,
                                    }
                                },
                            },
                        )
                    },
                    {
                        test: lessModuleRegex,
                        use: getStyleLoaders({
                                importLoaders: 2,
                                sourceMap: shouldUseSourceMap,
                                modules: {
                                    localIdentName: cssModuleName
                                },
                            },
                            'less-loader',
                            {
                                loader: 'sass-resources-loader',
                                options: {
                                    resources: [
                                        paths.publicLessPath
                                    ],
                                },
                            }
                        ),
                    },
                ]
            },
        ],
    },
    plugins: [
        new WebpackBar({
            name: name,
            color: 'blue',
            profile: true,
        }),
        // new AntdDayjsWebpackPlugin(),
        new webpack.DefinePlugin(getClientEnvironment()),
        new HtmlWebpackPlugin({
            title: '百家号',
            filename: 'index.html',
            template: paths.appHtml,
            favicon: paths.logo,
            // 抄一下CRA的minify配置
            minify: isEnvProduction ? {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            } : undefined,
        }),
    ],
};
module.exports = Promise.all([webpackBaseConfig, getMergeConfig()]).then(
    configs => merge(...configs)
);