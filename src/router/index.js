import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import PlantModeling from '../views/PlantModeling.vue'
import TestPage from '../components/SuspenseTest/TestPage.vue'

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
]

const router = new VueRouter({
  routes
})



export default router
