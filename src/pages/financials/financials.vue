<template lang="pug" src="./financials.pug"></template>

<script>

export default {
  computed: {
    props () {
      return this.$store.state.pages.financials
    }
  },
  components: {
  }
}
</script>
