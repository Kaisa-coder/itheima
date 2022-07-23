const path = require('path');

// 1.导入HTML插件,得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 2.创建HTML插件的实例对象
const htmlPlugin = new HtmlPlugin({
    // 指定要复制哪个页面
    template: './src/index.html',
    // 指定复制出来的文件名和存放路径
    filename: './index.html'
})

// 注意:左侧的 {} 是结构赋值 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 使用Node.js中的导出语法,向外导出一个webpack的配置对象
module.exports = {
    // 在开发调试阶段,建议大家都把 devtool 的值都设置为 eval-sourse-map
    // devtool:'eval-source-map',
    // 在实际发布的时候,建议大家把 devtool 的值设置为 nosources-source-map 或直接关闭 Sourcemap
    devtool: 'nosources-source-map',
    // 代表webpack运行的模式,可选值有两个 development 和 production
    // 结论:开发时候一定要用 development , 因为追求的是打包的速度,而不是体积
    // 反之,发布上线的时候一定要用 production ,因为上线追求的是体积小,而不是打包速度快
    mode: 'development',
    // entry:'指定要处理哪个文件'
    entry: path.join(__dirname, './src/index1.js'),
    // 指定生成的文件要存放哪里
    output: {
        // 存放目录
        path: path.join(__dirname, 'dist'),
        // 生成的文件名
        filename: 'js/bundle.js'
    },
    // 插件的数组,将来 webpack 在运行时,会加载并调用这些插件
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    devServer: {
        // 首次打包成功后,自动打开浏览器
        open: true,
        // 在 http 协议中,如果端口号是 80 ,则可以被省略
        port: 80,
        // 指定运行的地址
        host: '127.0.0.1'
    },
    module: {
        rules: [
            // 定义了不同模块对于的loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 处理 .less 文件的loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // 处理图片的 loader
            // 如果需要调用的 loader 只有一个,则只传递一个字符串也行,如果有多个 loader ,则必须指定数组
            // 在配置url-loader 的时候,多个参数之间使用 & 符号进行分隔
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=images' },
            // 在配置 babel—loader 的时候, 程序员只需要把自己的代码进行转换即可;一定要排除 node_modules 目录中的 js 文件,因为第三方包中的 js 兼容性不需要程序员关心
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        alias: {
            // 告诉 webpack ,程序员写的代码中, @ 符号代表 src 这一层目录
            '@': path.join(__dirname,'./src/')
        }
    }
}