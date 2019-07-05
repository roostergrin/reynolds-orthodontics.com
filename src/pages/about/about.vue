<template lang="pug" src="./about.pug"></template>

<script>
import HeroComponent from 'components/hero/hero'
import CustomDoctor from 'custom/custom-about-doctor/custom-about-doctor'

export default {
  computed: {
    props () {
      return this.$store.state.pages.about
    }
  },
  components: {
    CustomDoctor,
    HeroComponent
  }
}
</script>
