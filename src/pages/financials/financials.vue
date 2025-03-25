<template lang="pug" src="./financials.pug"></template>

<script>
import BlockTitleText from 'components/block/block-title-text/block-title-text'
import FinancialFaq from 'custom/custom-financials-faq/custom-financials-faq'
import HeroComponent from 'components/hero/hero'
import CustomContactLocation from 'custom/custom-contact-location/custom-contact-location'

export default {
  computed: {
    props () {
      return this.$store.state.pages.financials
    }
  },
  components: {
    BlockTitleText,
    FinancialFaq,
    HeroComponent,
    CustomContactLocation
  }
}
</script>
