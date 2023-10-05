import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import PlantModeling from '../views/PlantModeling.vue'
import TestPage from '../components/SuspenseTest/TestPage.vue'
import HomeJia from '../components/SuspenseTest/HomeJia.vue'
import TestXH from '../components/SuspenseTest/TestXH'
import WyY from '../components/SuspenseTest/WyY'
import SectionsCard from '../components/SuspenseTest/SectionsCard'
import TestCard from '../components/SuspenseTest/TestCard'
import MusicPlay from '../components/SuspenseTest/MusicPlay'
import ShortVideo from '../components/SuspenseTest/ShortVideo'
import JiBenVideo from '../components/SuspenseTest/JiBenVideo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'gongcjm',
    component: PlantModeling
  }, 
  {
    path: '/test',
    name: 'test',
    component: SectionsCard
  },
  {
    path: '/test1',
    name: 'test1',
    component: JiBenVideo
  },
  {
    path:'/xiaohua',
    name:'xiaohua',
    component: ShortVideo
  },
  {
    path: '/viweData',
    name: 'viweData',
    component: HomeJia
  },
  {
    path: '/WyY',
    name: 'WyY',
    component: WyY
  }
]

const router = new VueRouter({
  routes
})



export default router
