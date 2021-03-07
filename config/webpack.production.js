const { join, resolve } = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const TerserPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// module.exports = {
//   output: {
//     path: join(__dirname, '../dist/'),
//     publicPath: '/',
//     assetModuleFilename: 'scripts/[name].[contenthash:5].bundule.[ext]',
//     filename: 'scripts/[name].[contenthash:5].bundule.js',
//   },
//   devtool: 'cheap-source-map',
//   // optimization: {
//   //   minimize: true,
//   //   minimizer: [
//   //     new TerserPlugin(),
//   //     new OptimizeCSSAssetsPlugin({
//   //       assetNameRegExp: /\.css$/g,
//   //       cssProcessor: require('cssnano'),
//   //       cssProcessorPluginOptions: {
//   //         preset: [
//   //           'default',
//   //           {
//   //             discardComments: {
//   //               removeAll: true,
//   //             },
//   //           },
//   //         ],
//   //       },
//   //       canPrint: true,
//   //     }),
//   //   ],
//   //   runtimeChunk: 'single',
//   //   splitChunks: {
//   //     chunks: 'all'
//   //   }
//   // },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       title: 'LEGO',
//       filename: 'index.html',
//       template: './public/index.ejs',
//       favicon: resolve( __dirname, '../public/lego.svg'),
//       minify: {
//         minifyJS: true,
//         removeComments: true,
//         collapseWhitespace: true,
//         removeAttributeQuotes: true,
//       },
//     }),
//     new MiniCssExtractPlugin({
//       filename: 'styles/[name].[contenthash:5].css',
//       chunkFilename: 'styles/[name].[contenthash:5].css',
//     }),
//   ]
// }
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const paths = require('./paths');

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP === 'true';
// const publicPath = paths.servedPath;
// 定义一些正则
const mode = 'production'; 
const isEnvDevelopment = mode === 'development';
const isEnvProduction = mode === 'production';
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
                        require('postcss-flexbugs-fixes'),
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
                        postcssNormalize()
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
module.exports = async () => ({
  output: {
    path: join(__dirname, '../dist/'),
    publicPath: '/',
    assetModuleFilename: 'scripts/[name].[contenthash:5].bundule.[ext]',
    filename: 'scripts/[name].[contenthash:5].bundule.js',
  },
    devtool: shouldUseSourceMap ? 'hidden-source-map' : false,
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        ecma: 5,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        //生产模式去掉console和debugger
                        drop_console: true,
                        drop_debugger: true,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        // 删注释
                        comments: false,
                        ascii_only: true,
                    },
                },
                parallel: true,
                // cache: true,
                // sourceMap: shouldUseSourceMap,
            }),
            new OptimizeCSSAssetsPlugin({// 默认用cssnano
                assetNameRegExp: /\.css$/g,
                cssProcessorOptions: {
                    map: shouldUseSourceMap ? {
                        inline: false,
                        annotation: true,
                    } : false,
                },
                cssProcessorPluginOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: {
                                removeAll: true,
                            },
                        },
                    ],
                },
                canPrint: true,
            }),
        ],
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: true,
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
                                      modifyVars: {
                                          ...require('@baidu/bjhui/config/modifyVars')
                                      },
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
                                      modifyVars: {
                                          ...require('@baidu/bjhui/config/modifyVars')
                                      },
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
        // 删除上次的产出
        new CleanWebpackPlugin(),
        // 把runtime嵌入行内
        // new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime~.+[.]js/]),
        // 生产环境将每个模块下的css文件抽离出来单独打包
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
    ],
    // node: {
    //     module: 'empty',
    //     dgram: 'empty',
    //     dns: 'mock',
    //     fs: 'empty',
    //     http2: 'empty',
    //     net: 'empty',
    //     tls: 'empty',
    //     child_process: 'empty',
    // }
});
