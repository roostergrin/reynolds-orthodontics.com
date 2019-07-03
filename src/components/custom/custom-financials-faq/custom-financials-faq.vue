<template lang='pug' src='./custom-financials-faq.pug'></template>

<script>
export default {
  props: {
    content: {
      Type: [Object, Array]
    }
  },
  data () {
    return {
      accordionShowing: null
    }
  },
  methods: {
    toggleAccordion (i) {
      this.accordionShowing === i ? this.accordionShowing = null : this.accordionShowing = i
    }
  }
}
</script>
