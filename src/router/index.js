import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/communities',
    name: 'Communities',
    component: () => import(/* webpackChunkName: "communities" */ '../views/Communities.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/devfest',
    name: 'devfest',
    component: () => import(/* webpackChunkName: "about" */ '../views/FindAnEvent.vue')
  },
  {
    path: '/devfest/:id',
    name: 'DevFestCommunityPage',
    component: () => import(/* webpackChunkName: "DevFestCommunityPage" */ '../views/DevFestCommunityPage.vue')
  },
  {
    path: '/badges',
    name: 'Badges',
    component: () => import(/* webpackChunkName: "about" */ '../views/Badges.vue')
  },
  {
    path: '/coc',
    name: 'CodeofConduct',
    component: () => import(/* webpackChunkName: "coc" */ '../views/CoC.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "FAQ" */ '../views/FAQ.vue')
  },
  // {
  //   path: "*",
  //   name: "PageNotFound",
  //   component: () =>
  //     import(/* webpackChunkName: "PageNotFound" */ "../views/PageNotFound.vue"),
  //     meta:{
  //       title:"Page not found | GDG Jalandhar" 
  //     }
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
})

export default router
