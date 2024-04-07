const path = require("path");// nodejs核心模块，专门用来处理路径问题
const { DefinePlugin } = require("webpack")
const { VueLoaderPlugin } = require('vue-loader')// 必须引入这个插件
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

function getStyleLoader(pre) {
    return [
        MiniCssExtractPlugin.loader,// 2.将js中的css通过创建style标签添加到html中生效
        'css-loader',// 1.将css资源编译成commonjs的模块到js文件中
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  'postcss-preset-env',// 解决css样式兼容性问题
                ],
              ],
            },
          },
        },
        pre
    ].filter(Boolean)// 过滤掉空值
}

module.exports = {
    // 入口
    entry: "./src/main.js",// 相对路径
    // 输出
    output: {
        // 其他文件输出路径
        path: path.resolve(__dirname, "dist"),// 绝对路径，当前路径的dist文件
        // 入口文件输出名
        filename: "static/js/main.js",
        clean: true,
    },
    // 加载器
    module: {
        rules: [// loader的配置
            {
                test: /\.vue$/,// 处理.vue结尾的文件，以下同理
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: getStyleLoader()
            },
            {
                test: /\.less$/,
                use: getStyleLoader("less-loader")
            },
            {
                test: /\.s[ac]ss$/,
                use: getStyleLoader("sass-loader")
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        // 将小于10kb的图片转base64
                        maxSize: 10 * 1024,
                    }
                },
                generator: {
                    // 输出图片名称设置，及路径
                    // 图片名称取前10位hash值
                    filename: "static/images/[hash:10][ext][query]"
                }
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: "asset/resource",//这种类型不会自动转化成base64
                generator: {
                    filename: "static/media/[hash:10][ext][query]"
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除这个里面的js文件不处理
                use: [
                    "babel-loader"  
                ],  
            }
        ]
    },
    // 插件
    plugins: [
        // 请确保引入这个插件来施展Vue魔法
        new VueLoaderPlugin(),
        new CopyPlugin({// 将已存在的单个文件或整个目录复制到生成目录,例如网页标题图标。
            patterns: [
                { 
                    from: path.resolve(__dirname, "public"), 
                    to: path.resolve(__dirname, "dist"),
                    globOptions: {
                        // 忽略index.html文件
                        ignore: ["**/index.html"],
                    }
                },
            ],
        }),
        new ESLintPlugin({
            // 检测哪些文件
            context: path.resolve(__dirname, "src"),
        }),
        new HtmlWebpackPlugin({
            // 模版：以 public/index.html 文件创建新的html文件
            // 新的文件拥有 与原来的结构一致，会自动引入打包输出的资源
            template: path.resolve(__dirname, "public/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/main.css"
        }),
        new CssMinimizerPlugin(),
        new DefinePlugin({// 解决vue3控制台警告环境变量的问题
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        })
    ],
    // 模式，开发-生产
    mode: "production",
    resolve: {// 引入模块时可以省略的文件扩展名
        extensions: [".vue", ".js", ".json"]
    }
}