import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeJia from '../components/SuspenseTest/HomeJia.vue'
import WyY from '../components/SuspenseTest/WyY.vue'
import JiBenVideo from '../components/SuspenseTest/JiBenVideo.vue'

Vue.use(VueRouter)

const routes = [
  {// 元视频组件
    path: '/test1',
    name: 'test1',
    component: JiBenVideo
  },
  {//大屏测试
    path: '/viweData',
    name: 'viweData',
    component: HomeJia
  },
  {
    path: '/',
    name: 'WyY',
    component: WyY
  }
]

const router = new VueRouter({
  routes
})



export default router
