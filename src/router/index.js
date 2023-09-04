import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import PlantModeling from '../views/PlantModeling.vue'
import TestPage from '../components/SuspenseTest/TestPage.vue'
import HomeJia from '../components/SuspenseTest/HomeJia.vue'

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
    component: TestPage
  },
  {
    path: '/viweData',
    name: 'viweData',
    component: HomeJia
  },
]

const router = new VueRouter({
  routes
})



export default router
