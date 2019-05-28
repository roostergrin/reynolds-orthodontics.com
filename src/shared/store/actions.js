import axios from 'axios'
import api from 'api'
import {
  GET_APP,
  // GET_BLOG,
  GET_PAGES,
  SET_SCROLLED
} from './mutation-types'

const actions = {
  GET_APP ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/app`)
        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: { ...data.acf } }),
          {}
        )
        commit(GET_APP, data)
      } catch (e) { console.log('APP API: ' + e) }
    })()
  },
  // GET_BLOG ({ commit }) {
  //   (async () => {
  //     try {
  //       const response = await axios.get(`${api}/wp/v2/posts?per_page=10&_embed`)
  //       const data = response.data.reduce((blogList, blog) => {
  //         const newBlog = { slug: blog.slug, categories: blog.categories, ...blog.acf }
  //         blogList.push(newBlog)
  //         return blogList
  //       }, [])
  //       commit(GET_BLOG, data)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   })()
  // },
  GET_PAGES ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/pages?page=1&per_page=100`)
        const total = response.headers['x-wp-totalpages']
        let page = 1

        while (page < total) {
          page++
          let res = axios.get(`${api}/wp/v2/pages?page=${page}&per_page=100`)
          response.data.concat(res.data)
        }

        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: {title: data.title.rendered, ...data.acf} }),
          {}
        )
        commit(GET_PAGES, data)
      } catch (e) {
        console.log('PAGES API: ' + e)
      }
    })()
  },
  SET_SCROLLED ({ commit }, data) {
    commit(SET_SCROLLED, data)
  }
}

export default actions
