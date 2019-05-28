import Vue from 'vue'
import AppIcon from 'components/app/app-icon/app-icon'
import AppLazyImage from 'components/app/app-lazy-image/app-lazy-image'

const components = () => {
  Vue.component('AppIcon', AppIcon)
  Vue.component('AppLazyImage', AppLazyImage)
}

export default components()
