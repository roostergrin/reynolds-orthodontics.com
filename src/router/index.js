import Vue from 'vue'
import VueRouter from 'vue-router'
import Styleguide from '@/pages/styleguide/styleguide'
import PageNotFound from '@/pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'

const Home = () => import('@/pages/home/home')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      navigation: true,
      component: Home
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      navigation: false,
      component: Styleguide
    },
    {
      path: '/*',
      name: '404',
      navigation: false,
      component: PageNotFound
    }
  ],
  scrollBehavior
})

router.beforeEach((to, from, next) => {
  /* eslint-disable */
  if (to.hash === "") {
    /* eslint-enable */
    window.scrollTo(0, 0)
  }
  next()
})

export default router
