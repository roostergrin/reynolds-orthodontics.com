<template lang="pug" src="./treatments.pug"></template>

<script>
import BlockTabs from 'components/block/block-tabs/block-tabs'
import CustomTreatments from 'custom/custom-treatments-options/custom-treatments-options'
import HeroComponent from 'components/hero/hero'

export default {
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  components: {
    BlockTabs,
    CustomTreatments,
    HeroComponent
  }
}
</script>
