<template lang="pug" src="./home.pug"></template>

<script>
import HeroComponent from 'components/hero/hero'
import BlockTabs from 'block/block-tabs/block-tabs'
import CustomWelcome from 'custom/custom-home-welcome/custom-home-welcome'

export default {
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    BlockTabs,
    CustomWelcome,
    HeroComponent
  }
}
</script>
