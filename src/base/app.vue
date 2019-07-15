<template lang="pug" src="./app.pug"></template>

<script>
import BlockExam from 'block/block-exam/block-exam'
import TheFooter from 'components/footer/footer'
import TheNavigation from 'components/navigation/navigation/'

export default {
  async created () {
    this.$store.dispatch('GET_APP')
    // this.$store.dispatch('GET_BLOG')
    this.$store.dispatch('GET_PAGES')
    this.$store.dispatch('GET_INSTAGRAM')
    this.$store.dispatch('SET_SCROLLED', false)
  },
  components: {
    BlockExam,
    TheFooter,
    TheNavigation
  }
}
</script>

<style src='../main.sass' lang='sass'></style>
