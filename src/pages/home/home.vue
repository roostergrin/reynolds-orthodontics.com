<template lang="pug" src="./home.pug"></template>

<script>
const HeroComponent = () => import('components/hero/hero')
const BlockTabs = () => import('components/block/block-tabs/block-tabs')

export default {
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    BlockTabs,
    HeroComponent
  }
}
</script>
