const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{//配置开发时态的代理Proxy
    proxy:{
      '/emailTest%99/': {
        target: 'https://api.apiopen.top',
        pathRewrite: {'^/emailTest%99/' : '/'},
        ws: true,
        changeOrigin: true
      },
      '/movie/': {
        target: 'https://api.pingcc.cn',
        pathRewrite: {'^/movie/' : '/'},
        ws: true,
        changeOrigin: true
      },
      '/bbj%8/': {
        target: 'https://api.cenguigui.cn',
        pathRewrite: {'^/bbj%8/' : '/'},
        ws:true,
        changeOrigin: true
      },
      '/sbjk%8/': {
        target: 'https://free.wqwlkj.cn',
        pathRewrite: {'^/sbjk%8/' : '/'},
        ws:true,
        changeOrigin: true
      },
    }
  }
})
