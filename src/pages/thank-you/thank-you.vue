<template lang="pug" src="./thank-you.pug"></template>

<script>
import HeroComponent from 'components/hero/hero'

export default {
  computed: {
    props () {
      return this.$store.state.pages['thank-you']
    }
  },
  components: {
    HeroComponent
  }
}
</script>
