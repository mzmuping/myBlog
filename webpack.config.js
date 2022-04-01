const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const batch = require('./wepack.batch.entry')['entry']();
console.log('batch.entry=', batch.entry)
console.log('batch.entryTemplate=', batch.entryTemplate)
module.exports = {
    mode: 'development',
    entry: batch.entry,
    // devtool: 'inline-source-map',
    output: {
        filename: 'js/[name]/[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: "/"
    },
    devServer: {
        allowedHosts: 'auto',
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true,

    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", '.jsx', ".json"],
        alias: {
            '@': path.join(__dirname, '..', "src") // 在项目中使用@符号代替src路径，导入文件路径更方便
        }
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.(js|jsx|ts|tsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader',//loader的名称（必须）
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader', // 创建 <style></style>
                    },
                    {
                        loader: 'css-loader',  // 转换css
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader', // 编译 Less -> CSS
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        //     new HtmlWebpackPlugin({
        //     title: '测试用例',
        //     template: './public/index.html',
        //     //  html 文件进行压缩
        //     minify: {
        //         removeComments: true,  //去注释             //去注释
        //         collapseWhitespace: true,//压缩空格           //压缩空格
        //         removeAttributeQuotes: true   //去除属性 标签的 引号  例如 <p id="test" /> 输出 <p id=test/>      //去除属性 标签的 引号  例如 <p id="test" /> 输出 <p id=test/>
        //     }
        // }),
        ...batch.entryTemplate,
    ],
}