import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueWaypoint from 'vue-waypoint'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// import VueScrollTo from 'vue-scrollto'
// import VueCookies from 'vue-cookies'
// import VueAxe from 'vue-axe'

const vendors = () => {
  Vue.use(VeeValidate)
  Vue.use(VueWaypoint)
  // Vue.use(VueAwesomeSwiper, /* { default global options } */)
  // Vue.use(VueScrollTo, {
  //   container: 'body',
  //   duration: 1500,
  //   easing: 'ease',
  //   offset: 0,
  //   cancelable: true,
  //   onDone: false,
  //   onCancel: false,
  //   x: false,
  //   y: true
  // })
  // Vue.use(VueCookies)
  // Vue.use(VueAxe, {
  //   config: {
  //     rules: [
  //       { id: 'heading-order', enabled: true },
  //       { id: 'label-title-only', enabled: true },
  //       { id: 'link-in-text-block', enabled: true },
  //       { id: 'region', enabled: true },
  //       { id: 'skip-link', enabled: true },
  //       { id: 'help-same-as-label', enabled: true }
  //     ]
  //   }
  // })
}

export default vendors()
