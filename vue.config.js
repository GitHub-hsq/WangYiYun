const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api%88/':{
        target: 'http://v.juhe.cn',
        pathRewrite: {'^/api%88/' : '/'},
        ws: true,
        changeOrigin: true,//是否撒谎
      },
      '/appb9#2/':{
        target: 'https://apis.juhe.cn',
        pathRewrite: {'^/appb9#2/' : '/'},
        ws: true,
        changeOrigin: true,
      },
      '/images@5/':{
        target: 'https://api.apiopen.top',
        pathRewrite: {'^/images@5/' : '/'},
        ws: true,
        changeOrigin: true
      },
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
      '/wrdan%dy/': {
        target: 'https://api.wrdan.com',
        pathRewrite: {'^/wrdan%dy/' : '/'},
        ws:true,
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
