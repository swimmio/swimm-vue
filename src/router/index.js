import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About';

Vue.use(VueRouter)

function dynamicPropsFn (route) {
  return {
    itemId:  parseInt(route.params.id)
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:id',
    name: 'Item',
    component: Home,
    props: dynamicPropsFn,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
