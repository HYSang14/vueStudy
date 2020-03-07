1. npm init 创建目录
2. npm install webapck --save-dev 本地局部安装webpack
3. npm install webpack-dev-server --save-dev 安装webpack-dev-server，
4. npm install webpack-cli --save-dev
5. npm install css-loader style-loader --save-dev
6. npm install extract-text-webpack-plugin --save-dev
7. npm install --save vue
8. npm install --save-dev vue-loader vue-style-loader vue-template-compiler vue-hot-reload-api
9. npm install --save-dev babel babel-loader babel-plugin-transform babel-plugin-transform-runtime babel-preset-es2015 babel-runtime
10. 安装babel-loader babel-core后运行失败，原因是：babel-loader版本8对应babel-core版本7， babel-loader版本7对应babel-core版本6
11. 安装file-loader 版本5，图片打包路径错误：[Object, Module]，webpack.config.js中设置esModule:false无效，改为版本4，生效
12. webpack.prod.config.js中使用webpack.optimize.UglifyJsPlugin压缩js报错，已经不存在这种写法，使用config.optimization.minimize代替
    运行 npm install --save-dev uglifyjs-webpack-plugin 安装uglifyjsPlugin
13. 生产环境使用webpack.prod.config.js打包后出错，？？？？？没找到怎么解决