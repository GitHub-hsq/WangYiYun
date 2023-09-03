import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BMap  from 'vue-baidu-map'



Vue.config.productionTip = false
Vue.use(BMap , {
  ak: '7VbAClsuja7FTOGxT1ajEeiwyKpUhsYU'//ak密钥
});
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){//数据代理之前安装全局事件总线
    Vue.prototype.$bus = this
  },
}).$mount('#app')
