const path=require("path");
const webpack=require("webpack");
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, './src/js/main.js'), // 项目入口文件
    output: { // 配置输出选项
        path: path.resolve(__dirname, 'dist'), // 配置输出的路径
        filename: 'bundle.js' // 配置输出的文件名
    },
    devServer:{
        hot:true,
        open:true,
        port:4321,
        contentBase:"src"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.resolve(__dirname, './src/index.html'),//模板路径
            filename:'index.html'//自动生成的HTML文件的名称
        })
    ],
    module: {
        rules: [
            {test: /\.css$/, use:["style-loader", "css-loader"]}
        ]
    }
}