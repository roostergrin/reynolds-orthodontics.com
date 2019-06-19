import Vue from 'vue'
import VueRouter from 'vue-router'
import StyleGuide from '@/pages/style-guide/style-guide'
import scrollBehavior from '@/shared/functionality/scroll-behavior'

const AboutPage = () => import('@/pages/about/about')
const ContactPage = () => import('@/pages/contact/contact')
const FinancialsPage = () => import('@/pages/financials/financials')
const HomePage = () => import('@/pages/home/home')
const NewPatientPage = () => import('@/pages/new-patient/new-patient')
const TreatmentsPage = () => import('@/pages/treatments/treatments')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      navigation: false,
      component: HomePage
    },
    {
      path: '/about',
      name: 'About',
      navigation: true,
      component: AboutPage
    },
    {
      path: '/treatments',
      name: 'Treatments',
      navigation: true,
      component: TreatmentsPage
    },
    {
      path: '/new-patient',
      name: 'New Patient',
      navigation: true,
      component: NewPatientPage
    },
    {
      path: '/contact',
      name: 'home',
      navigation: true,
      component: ContactPage
    },
    {
      path: '/financials',
      name: 'Financials',
      navigation: true,
      component: FinancialsPage
    },
    {
      path: '/style-guide',
      name: 'style guide',
      navigation: false,
      component: StyleGuide
    },
    {
      path: '/*',
      navigation: false,
      component: HomePage
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
