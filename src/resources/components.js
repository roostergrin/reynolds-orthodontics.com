import Vue from 'vue'
import AppIcon from 'components/app/app-icon/app-icon'
import AppLazyImg from 'components/app/app-lazy-img/app-lazy-img'
import AppLazyBg from 'components/app/app-lazy-bg/app-lazy-bg'

const components = () => {
  Vue.component('AppIcon', AppIcon)
  Vue.component('AppLazyImg', AppLazyImg)
  Vue.component('AppLazyBg', AppLazyBg)
}

export default components()
