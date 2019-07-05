<template lang="pug" src="./footer.pug"></template>

<script>
export default {
  computed: {
    content () {
      return this.$store.state.app.nav
    }
  }
}
</script>
