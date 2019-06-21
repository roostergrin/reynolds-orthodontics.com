<template lang="pug" src="./home.pug"></template>

<script>
import HeroComponent from 'components/hero/hero'

export default {
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    HeroComponent
  }
}
</script>
