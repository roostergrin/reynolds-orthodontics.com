import {
  GET_APP,
  GET_PAGES,
  GET_INSTAGRAM,
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
  [GET_INSTAGRAM] (state, data) {
    state.insta = data
  },
  [SET_SCROLLED] (state, data) {
    state.scrolled = data
  }
}

export default mutations
