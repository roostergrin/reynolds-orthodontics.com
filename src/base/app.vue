<template lang="pug" src="./app.pug"></template>

<script>
import BlockExam from 'block/block-exam/block-exam'
import BlockTopPhone from 'block/block-top-phone/block-top-phone'
import TheFooter from 'components/footer/footer'
import FooterMobile from 'components/footer/footer-mobile/footer-mobile'
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
    BlockTopPhone,
    TheFooter,
    FooterMobile,
    TheNavigation
  }
}
</script>

<style src='../main.sass' lang='sass'></style>
