<template lang="pug" src="./treatments.pug"></template>

<script>
import HeroComponent from 'components/hero/hero'
import BlockTabs from 'components/block/block-tabs/block-tabs'

export default {
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  components: {
    BlockTabs,
    HeroComponent
  }
}
</script>
