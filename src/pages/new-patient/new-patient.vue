<template lang="pug" src="./new-patient.pug"></template>

<script>
import BlockTitleText from 'components/block/block-title-text/block-title-text'
import CustomNewForms from 'components/custom/custom-new-forms/custom-new-forms'
import HeroComponent from 'components/hero/hero'

export default {
  computed: {
    props () {
      return this.$store.state.pages['new-patient']
    }
  },
  components: {
    BlockTitleText,
    CustomNewForms,
    HeroComponent
  }
}
</script>
