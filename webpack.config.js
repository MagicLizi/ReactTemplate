/**
 * Created by MagicLizi on 2016/12/30.
 */
/**
 * Created by magiclizi on 2016/12/9.
 */
module.exports = {
    // devtool: 'eval-source-map',
    entry:[__dirname + '/app/index.js'],
    output:{
        path:__dirname + '/build',
        filename:'bundle.js'
    },

    module:{
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    //webpack-dev-server配置
    devServer: {
        host:'0.0.0.0',
        contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        colors: true,//在cmd终端中输出彩色日志
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8080,//设置默认监听端口，如果省略，默认为"8080"
        process: true,//显示合并代码进度
    }
}