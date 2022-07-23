const path =require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackConfig =  new CleanWebpackPlugin()
const htmlWebpackPlugin=new HtmlWebpackPlugin({
  template:'./src/index.html',
  filename:'./index.html'
})
module.exports={
  mode: 'development',
  devtool:'eval-source-map',
  // 指定打包的入口
  entry:path.join(__dirname,'./src/index.js'),
  // 指定打包的出口
  output:{
    // 输出文件的存放路径
    path:path.join(__dirname,'./dist'),
    // 存放的目录
    filename:"js/bundle.js"
  },
  devServer:{
   open:true,
   host:'127.0.0.1',
   port:80
  },
  plugins:[htmlWebpackPlugin,webpackConfig],
  module :{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
    ]
  },
}