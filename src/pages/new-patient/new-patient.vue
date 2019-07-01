<template lang="pug" src="./new-patient.pug"></template>

<script>
const BlockTitleText = () => import('components/block/block-title-text/block-title-text')
const CustomNewForms = () => import('components/custom/custom-new-forms/custom-new-forms')
const HeroComponent = () => import('components/hero/hero')

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
