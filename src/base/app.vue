<template lang="pug" src="./app.pug"></template>

<script>
import NavigationDesktop from 'components/navigation/navigation-desktop/navigation-desktop'

export default {
  async created () {
    this.$store.dispatch('GET_APP')
    // this.$store.dispatch('GET_BLOG')
    this.$store.dispatch('GET_PAGES')
    this.$store.dispatch('SET_SCROLLED', false)
  },
  components: {
    NavigationDesktop
  }
}
</script>

<style src='../main.sass' lang='sass'></style>
