import Vue from 'vue'
import VueRouter from 'vue-router'
import StyleGuide from 'pages/style-guide/style-guide'
import scrollBehavior from '@/shared/functionality/scroll-behavior'

const AboutPage = () => import('pages/about/about')
const ContactPage = () => import('pages/contact/contact')
const FinancialsPage = () => import('pages/financials/financials')
const HomePage = () => import('pages/home/home')
const NewPatientPage = () => import('pages/new-patient/new-patient')
const TreatmentsPage = () => import('pages/treatments/treatments')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      navigation: true,
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
      component: TreatmentsPage,
      children: [
        {
          path: '/treatments#treatment-tabs',
          label: 'kids club',
          background: '/static/navigation-kid-bg.jpg',
          tab: 0
        },
        {
          path: '/treatments#treatment-tabs',
          label: 'teen',
          background: '/static/navigation-teen-bg.jpg',
          tab: 1
        },
        {
          path: '/treatments#treatment-tabs',
          label: 'adult',
          background: '/static/navigation-adult-bg.jpg',
          tab: 2
        },
        {
          path: '/treatments#treatment-options',
          label: 'treatment options',
          icon: 'teeth'
        }
      ]
    },
    {
      path: '/new-patient',
      name: 'New Patient',
      navigation: true,
      component: NewPatientPage
    },
    {
      path: '/contact',
      name: 'Contact',
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
