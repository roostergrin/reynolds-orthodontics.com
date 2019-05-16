import {
  GET_APP,
  GET_PAGES,
  SET_SCROLLED
} from './mutation-types.js'

const mutations = {
  [GET_APP] (state, data) {
    state.app = data
  },
  // [GET_BLOG] (state, data) {
  //   state.blog = data
  // },
  [GET_PAGES] (state, data) {
    state.pages = data
    state.loading = false
  },
  [SET_SCROLLED] (state, data) {
    state.scrolling = data
  }
}

export default mutations
