<template lang="pug" src="./financials.pug"></template>

<script>
const BlockTitleText = () => import('components/block/block-title-text/block-title-text')
const CustomFinancialsFaq = () => import('components/custom/custom-financials-faq/custom-financials-faq')
const HeroComponent = () => import('components/hero/hero')

export default {
  computed: {
    props () {
      return this.$store.state.pages.financials
    }
  },
  components: {
    BlockTitleText,
    CustomFinancialsFaq,
    HeroComponent
  }
}
</script>
