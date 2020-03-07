const path = require('path');
const webpack = require('webpack')
//导入插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === "development";
const config = {
    // 打包入口
    entry: { 
        main: './main'
    }, 
    // 打包出口
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    // 配置
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            { 
                test: /\.(png|jpg|gif|bmp|jpeg|svg)$/,
                use: [
                     {
                         loader: 'url-loader',
                         options:{
                            esModule: false,
                             limit:10240//限制打包图片的大小
                         }
                     },
                 ],  
            },
        ]
    },
    // 插件
    plugins: [
        new webpack.DefinePlugin({
            'process-env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        //重命名提取后的css文件
        new ExtractTextPlugin("main.css"),
        new VueLoaderPlugin(),
        new HTMLPlugin()
    ]
};
if (isDev) {
    config.devServer = {
        port: '8080',
        host: '0.0.0.0',
        overlay: {
            error: true
        }
    }
}
module.exports = config;