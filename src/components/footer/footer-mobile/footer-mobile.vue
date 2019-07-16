<template lang="pug" src="./footer-mobile.pug"></template>

<script>
export default {
  computed: {
    content () {
      return this.$store.state.app.nav
    }
  }
}
</script>
