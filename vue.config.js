// const path = require('path')
// const { clear } = require('console')
// const resolve = dir => {
//   return path.join(__dirname, dir)
// }
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
module.exports={
    // indexPath:'index.dev.html',
    filenameHashing:true,//哈希
    pages: {
        index: {
          // page 的入口
          entry: 'src/main.js',
          // 模板来源
        //   template: ( 'public/index.dev.html'), // 这里用来区分加载那个 html
          // 在 dist/index.html 的输出
          //   filename: 'index.html',
          // 当使用 title 选项时，
          // title: "时光机后台管理系统",
          // 提取出来的通用 chunk 和 vendor chunk。
        //   chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    configureWebpack:config=>{
      if (isProd) {
        // 配置webpack 压缩
        config.plugins.push(
          new CompressionWebpackPlugin({
            test: /\.js$|\.html$|\.css$/,
            // 超过4kb压缩
            threshold: 4096
          })
        )
      }
    },
    devServer: {
        proxy: {
          '/api': {
            target: 'http://www.qyzfb.net/index.php/Home/Data/', //对应自己的接口
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
      }
}